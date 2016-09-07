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

    var articlesDir = path.join(distDir, "sdk-examples");
    fs.mkdirSync(articlesDir);

    var imgDir = path.join(articlesDir, "img");
    fs.mkdirSync(imgDir);  

    var appDir = path.join(cwd, "app");

    var mainOverview = path.join(appDir, "global-overview.md");
    fs.copySync(mainOverview, path.join(articlesDir, "overview.md"));

    // Gather all component overviews
    var components = glob.sync(appDir + "/**/overview.md").sort(compareFiles);  

    var jenkinsPosition = 1;
    components.forEach(function(overview){        
        var componentDirName = path.dirname(overview);
        var componentHeader = path.basename(componentDirName);
                
        // Create the component article file, i.e. button.md
        var componentArticleFile = path.join(articlesDir, componentHeader + ".md");

        var componentPrettyHeader = prettify(componentHeader);

        // Jenkins Header
        fs.appendFileSync(componentArticleFile, "---\n", {encoding: 'utf8'});
        fs.appendFileSync(componentArticleFile, "title: " + componentPrettyHeader + "\n", {encoding: 'utf8'});
        fs.appendFileSync(componentArticleFile, "description: " + componentPrettyHeader + " SDK Examples" + "\n", {encoding: 'utf8'});
        fs.appendFileSync(componentArticleFile, "position: " + jenkinsPosition++ + "\n", {encoding: 'utf8'});
        fs.appendFileSync(componentArticleFile, "slug: " + componentHeader + "\n", {encoding: 'utf8'});
        fs.appendFileSync(componentArticleFile, "---\n\n", {encoding: 'utf8'});
        
        // Component Markdown Header
        fs.appendFileSync(componentArticleFile, "# " + componentPrettyHeader + "\n\n", {encoding: 'utf8'});
        
        // Component Overview
        var overviewContents = fs.readFileSync(overview, {encoding: 'utf8'});
        fs.appendFileSync(componentArticleFile, overviewContents + "\n\n", {encoding: 'utf8'});

        // Component Images
        let componentImage = path.join(componentDirName, "image.png");
        if (fs.existsSync(componentImage)) {
            let newImageFileName = componentHeader + "-" +  "image.png";
           
            fs.copySync(componentImage, path.join(imgDir, newImageFileName));

            fs.appendFileSync(componentArticleFile, "![Image](img/" + newImageFileName + " \"Image\")\n\n", { encoding: 'utf8' });
        }

        var articles = glob.sync(componentDirName + "/**/article.md").sort(compareFiles);
        
        // Append each example to the big article file.
        articles.forEach(function(article) {
            var articleDirName = path.dirname(article);
            var articleHeader = path.basename(articleDirName);

            // Header
            var prettyArticleHeader = prettify(articleHeader);
            fs.appendFileSync(componentArticleFile, "## " + prettyArticleHeader + "\n\n", {encoding: 'utf8'});

            // Content
            var articleContents = fs.readFileSync(article, {encoding: 'utf8'});
            fs.appendFileSync(componentArticleFile, articleContents + "\n\n", {encoding: 'utf8'});
            
            // Article Images
            let articleImage = path.join(articleDirName, "image.png");
            
            if (fs.existsSync(articleImage)){
                let newArticleImageFileName = componentHeader + "-" + articleHeader + "-image.png";
                let joined = path.join(imgDir, newArticleImageFileName);
                fs.copySync(articleImage, joined); 

                fs.appendFileSync(componentArticleFile, "![Image](img/"+newArticleImageFileName+" \"Image\")\n\n", {encoding: 'utf8'});
            }

            // Links
            var githubDirUrl = pjson.homepage + "/edit/master/" + path.relative(cwd, articleDirName).replace(/\\/g, "/");

            var linkToDocument = "[Improve this document](" + githubDirUrl + "/" + path.basename(article) + ")"
            fs.appendFileSync(componentArticleFile, linkToDocument + "\n\n", {encoding: 'utf8'});
            
            var linkToSource = "[Demo Source](" + githubDirUrl + ")"
            fs.appendFileSync(componentArticleFile, linkToSource + "\n\n", {encoding: 'utf8'});

            // Horizontal Line
            fs.appendFileSync(componentArticleFile, "---\n\n", {encoding: 'utf8'});
        });
    });
}

build();