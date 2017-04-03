"use strict";

var path = require("path");
var fs = require('fs-extra');
var rimraf = require("rimraf");
var targz = require('tar.gz');
 
function archive(){
    var cwd = process.cwd();

    var distDir = path.join(cwd, "dist");
    var sourceDir = path.join(distDir, "code-samples");
    var version = process.env.PACKAGE_VERSION || "0.0.0"
    var env = process.env.ENV || "dev";
    var archiveFile = path.join(distDir, "sdk-code-samples-" + env + "-" + version + ".tar.gz");
    rimraf.sync(archiveFile);
    
    var read = targz().createReadStream(sourceDir);
    var write = fs.createWriteStream(archiveFile);
    read.pipe(write);
}

archive();
