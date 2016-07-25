var compiler = require('./compiler');

module.exports = function ($logger, $projectData, $usbLiveSyncService) {
	if (!$usbLiveSyncService.isInitialized) {
		return compiler.runTypeScriptCompiler($logger, $projectData.projectDir);
	}
}
