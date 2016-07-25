exports.runTypeScriptCompiler = runTypeScriptCompiler;

var spawn = require('child_process').spawn;
var fs = require('fs');
var path = require('path');

function runTypeScriptCompiler(logger, projectDir, options) {
	return new Promise(function (resolve, reject) {
		options = options || {};

		var peerTypescriptPath = path.join(__dirname, '../../typescript');
		var tscPath = path.join(peerTypescriptPath, 'lib/tsc.js');
		if (fs.existsSync(tscPath)) {
			try {
				logger.info('Found peer TypeScript ' + require(path.join(peerTypescriptPath, 'package.json')).version);
			} catch (err) { }
		} else {
			throw Error('TypeScript installation local to project was not found. Install by executing `npm install typescript`.');
		}

		var tsconfigPath = path.join(projectDir, 'tsconfig.json');
		if (!fs.existsSync(tsconfigPath)) {
			throw Error('No tsconfig.json file found in project.');
		}

		var nodeArgs = [tscPath, '--project', projectDir];
		if (options.watch) {
			nodeArgs.push('--watch');
		}

		var tsc = spawn(process.execPath, nodeArgs);
		var isResolved = false;
		tsc.stdout.on('data', function(data) {
			var stringData = data.toString();
			logger.info(stringData);
			if(options.watch && stringData.toLowerCase().indexOf("compilation complete. watching for file changes.") !== -1 && !isResolved) {
				isResolved = true;
				resolve();
			}
		});

		tsc.stderr.on('data', function(data) {
			logger.info(data.toString());
		});

		tsc.on('error', function(err) {
			logger.info(err.message);
			if(!isResolved) {
				isResolved = true;
				reject(err);
			}
		});

		// TODO: Consider using close event instead of exit
		tsc.on('exit', function (code, signal) {
			if(!isResolved) {
				isResolved = true;
				// EmitReturnStatus enum in https://github.com/Microsoft/TypeScript/blob/8947757d096338532f1844d55788df87fb5a39ed/src/compiler/types.ts#L605
				if (code === 0 || code === 2 || code === 3) {
					resolve();
				} else {
					reject(Error('TypeScript compiler failed with exit code ' + code));
				}
			}
		});
	});
}
