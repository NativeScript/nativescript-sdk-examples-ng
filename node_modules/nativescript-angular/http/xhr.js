var file_system_1 = require("file-system");
var xhr_1 = require("@angular/compiler/src/xhr");
var FileSystemXHR = (function (_super) {
    __extends(FileSystemXHR, _super);
    function FileSystemXHR() {
        _super.apply(this, arguments);
    }
    FileSystemXHR.prototype.resolve = function (url, baseUrl) {
        //Angular assembles absolute URL's and prefixes them with //
        if (url.indexOf("/") !== 0) {
            //Resolve relative URL's based on the app root.
            return file_system_1.path.join(baseUrl, url);
        }
        else {
            return url;
        }
    };
    FileSystemXHR.prototype.get = function (url) {
        var appDir = file_system_1.knownFolders.currentApp().path;
        var templatePath = this.resolve(url, appDir);
        if (!file_system_1.File.exists(templatePath)) {
            throw new Error("File " + templatePath + " does not exist. Resolved from: " + url + ".");
        }
        var templateFile = file_system_1.File.fromPath(templatePath);
        return templateFile.readText();
    };
    return FileSystemXHR;
}(xhr_1.XHR));
exports.FileSystemXHR = FileSystemXHR;
//# sourceMappingURL=xhr.js.map