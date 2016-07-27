"use strict";

var path = require("path");
var fs = require('fs-extra');
var rimraf = require("rimraf");
var targz = require('tar.gz');
 
function archive(){
    var cwd = process.cwd();

    var distDir = path.join(cwd, "dist");
    var sourceDir = path.join(distDir, "sdk-examples");
    var archiveFile = path.join(distDir, "sdk-examples.tar.gz");
    rimraf.sync(archiveFile);
    
    var read = targz().createReadStream(sourceDir);
    var write = fs.createWriteStream(archiveFile);
    read.pipe(write);
}

archive();