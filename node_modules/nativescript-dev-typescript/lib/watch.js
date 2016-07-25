var compiler = require('./compiler');

module.exports = function ($logger, $projectData, $errors) {
	return compiler.runTypeScriptCompiler($logger, $projectData.projectDir, { watch: true });
}
