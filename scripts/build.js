"use strict";

var process = require("process");
var path = require("path");
var fs = require('fs-extra');
var glob = require("glob");
var rimraf = require("rimraf");
var pjson = require('../package.json');
var child_process = require('child_process');
var targz = require('tar.gz');
  
// `i-am-article` becomes `I Am Article`
function prettify(str) {
    return str.split('-').map(function capitalize(part) {
        return part.charAt(0).toUpperCase() + part.slice(1);
    }).join(' ');
}

function compareFiles (leftFile, rightFile) {
    var l = prettify(path.basename(path.dirname(leftFile)));
    var r = prettify(path.basename(path.dirname(rightFile)));
    return l.localeCompare(r, "en-US");
}

function build(){
    // Re-create the `dist` dir
    var cwd = process.cwd();
    var distDir = path.join(cwd, "dist");
    rimraf.sync(distDir);
    fs.mkdirSync(distDir);

    var articleDir = path.join(distDir, "sdk-examples");
    fs.mkdirSync(articleDir);
    
    // Create the sdk-examples-toc.md file which will show links to on the left.
    var tocFile = path.join(articleDir, "sdk-examples-toc.md");
    fs.writeFileSync(tocFile, "", {encoding: 'utf8'});

    // Create the big article file sdk-examples.md
    var bigArticleFile = path.join(articleDir, "sdk-examples.md");
    fs.writeFileSync(bigArticleFile, "# NativeScript SDK Examples\n\n", {encoding: 'utf8'});
    
    var appDir = path.join(cwd, "app");

    // Main Content
    var mainContent = fs.readFileSync(path.join(appDir, "main.md"), {encoding: 'utf8'});
    fs.appendFileSync(bigArticleFile, mainContent + "\n\n", {encoding: 'utf8'});

    fs.appendFileSync(tocFile, "- [NativeScript SDK Examples](./sdk-examples.md#nativescript-sdk-examples)\n\n", {encoding: 'utf8'});
    
    // Gather all component overviews
    var components = glob.sync(appDir + "/**/overview.md").sort(compareFiles);
    components.forEach(function(overview){
        var componentDirName = path.dirname(overview);
        var componentHeader = path.basename(componentDirName);
                
        // Component Header
        var componentPrettyHeader = prettify(componentHeader);
        fs.appendFileSync(bigArticleFile, "## " + componentPrettyHeader + "\n\n", {encoding: 'utf8'});
        
        // Component Content
        var overviewContents = fs.readFileSync(overview, {encoding: 'utf8'});
        fs.appendFileSync(bigArticleFile, overviewContents + "\n\n", {encoding: 'utf8'});

        // Component TOC Entry
        var componentTOCEntry = "\t- ["+componentPrettyHeader+"](./sdk-examples.md#"+componentHeader+")";
        fs.appendFileSync(tocFile, componentTOCEntry + "\n\n", {encoding: 'utf8'});

        var articles = glob.sync(componentDirName + "/**/article.md").sort(compareFiles);
        
        // Append each example to the big article file.
        articles.forEach(function(article) {
            var articleDirName = path.dirname(article);
            var articleHeader = path.basename(articleDirName);

            // Header
            var prettyArticleHeader = prettify(articleHeader);
            fs.appendFileSync(bigArticleFile, "### " + prettyArticleHeader + "\n\n", {encoding: 'utf8'});

            // Content
            var articleContents = fs.readFileSync(article, {encoding: 'utf8'});
            fs.appendFileSync(bigArticleFile, articleContents + "\n\n", {encoding: 'utf8'});
            
            // Images
            let androidImage = path.join(articleDirName, "android.png");
            let iosImage = path.join(articleDirName, "ios.png");
            if (fs.existsSync(androidImage) && fs.existsSync(iosImage)){
                let newAndroidFileName = articleHeader + "-android.png";
                fs.copySync(androidImage, path.join(articleDir, newAndroidFileName));    
                
                let newiOSFileName = articleHeader + "-ios.png";
                fs.copySync(iosImage, path.join(articleDir, newiOSFileName));    

                fs.appendFileSync(bigArticleFile, "|Android|iOS|\n", {encoding: 'utf8'});
                fs.appendFileSync(bigArticleFile, "|---|---|\n", {encoding: 'utf8'});
                fs.appendFileSync(bigArticleFile, "|![Android]("+newAndroidFileName+" \"Android\")|![iOS]("+newiOSFileName+" \"iOS\")|\n\n", {encoding: 'utf8'});
            }

            // Links
            var githubDirUrl = pjson.homepage + "/edit/master/" + path.relative(cwd, articleDirName).replace(/\\/g, "/");

            var linkToDocument = "[Improve this document](" + githubDirUrl + "/" + path.basename(article) + ")"
            fs.appendFileSync(bigArticleFile, linkToDocument + "\n\n", {encoding: 'utf8'});
            
            var linkToSource = "[Demo Source](" + githubDirUrl + ")"
            fs.appendFileSync(bigArticleFile, linkToSource + "\n\n", {encoding: 'utf8'});

            // Horizontal Line
            fs.appendFileSync(bigArticleFile, "---\n\n", {encoding: 'utf8'});

            // Add an entry to the TOC
            var articleTOCEntry = "\t\t- ["+prettyArticleHeader+"](./sdk-examples.md#"+articleHeader+")";
            fs.appendFileSync(tocFile, articleTOCEntry + "\n\n", {encoding: 'utf8'});
        });

    });
}

build();