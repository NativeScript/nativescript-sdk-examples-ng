"use strict";
var process = require("process");
var path = require("path");
var fs = require('fs-extra');
var glob = require("glob");
var rimraf = require("rimraf");
var pjson = require('../package.json');

const CATEGORY = "-category";

// `i-am-article` becomes `I Am Article`
function prettify(str) {
    return str.split('-').map(function capitalize(part) {
        return part.charAt(0).toUpperCase() + part.slice(1);
    }).join(' ');
}

// Folder name 'ui-examples' becomes 'ui' (the way it should be displayed in the documentation tree)
function updateSubfoldersName(str) {
    return str.slice(0, str.lastIndexOf("-"));
}

function compareFiles(leftFile, rightFile) {
    var l = prettify(path.basename(path.dirname(leftFile)));
    var r = prettify(path.basename(path.dirname(rightFile)));
    return l.localeCompare(r, "en-US");
}

// Sort the examples based on the example-order defined in metadata.md. The missing example will be sort aphabetically at the end
// Example:
// metadata.md - action-bar
// example-order: title, action-items
function orderExamples (array, order, dirName) {
    var customSortArray = [];
    order.forEach(function(item){
        var index = array.indexOf(dirName+"/"+item+"/article.md");
        if(index >= 0){
            customSortArray.push(array[index]);
            array.splice(index, 1);
        }
    });
    array = array.sort(compareFiles);
    var resultArray = customSortArray.concat(array);
    return resultArray;
};

function build() {
    // Re-create the `dist` dir
    var cwd = process.cwd();
    var distDir = path.join(cwd, "dist");
    rimraf.sync(distDir);
    fs.mkdirSync(distDir);

    var articlesDir = path.join(distDir, "code-samples");
    fs.mkdirSync(articlesDir);

    var appDir = path.join(cwd, "app");

    var mainOverview = path.join(appDir, "global-overview.md");
    fs.copySync(mainOverview, path.join(articlesDir, "overview.md"));

    var jenkinsPosition = 1;

    gatherArticles(cwd, appDir, articlesDir, jenkinsPosition);
};

function gatherArticles(cwd, appDir, articlesDir, jenkinsPosition) {
    // Gather all main subfolders - ui
    var subDirs = fs.readdirSync(appDir).filter(function (file) {
        var filePath = path.join(appDir, file);
        var dir = fs.statSync(filePath);

        return dir.isDirectory() && path.parse(filePath).name.indexOf(CATEGORY) !== -1;
    });

    subDirs.forEach(function (subDir) {
        var currentDir = path.join(articlesDir, subDir);
        currentDir = updateSubfoldersName(currentDir);
        fs.mkdirSync(currentDir);

        var subDirPath = path.join(appDir, subDir);

        // Gather all component overviews in the subdirs - ng-ui-widgets-category, ui-extended-category
        var components = glob.sync(subDirPath + "/*/overview.md").filter(function (file) { 
            return !path.parse(file).dir.endsWith(CATEGORY);
        }).sort(compareFiles);
        getComponents(cwd, components, currentDir, jenkinsPosition);
        gatherArticles(cwd, subDirPath, currentDir, jenkinsPosition);
    });

    // Gather all component overviews in the main folders - app
    var components = glob.sync(appDir + "/**/overview.md").filter(function (file) {
        return path.parse(file).dir.indexOf(CATEGORY) === -1;
    }).sort(compareFiles);

    getComponents(cwd, components, articlesDir, jenkinsPosition);
}

// Gather all component overviews
function getComponents(cwd, components, currentDir, jenkinsPosition) {
    var imgDir = path.join(currentDir, "img");
    if (!fs.existsSync(imgDir)) {
        fs.mkdirSync(imgDir);
    }

   components.forEach(function (overview) {
            var componentDirName = path.dirname(overview);
            var componentHeader = path.basename(componentDirName);
            // Create the component article file, i.e. button.md
            var componentArticleFile = path.join(currentDir, componentHeader + ".md");

            var componentPrettyHeader = prettify(componentHeader);

            var componentArticlesOrder = [];
            // Jenkins Header
            // MetaData.md
            var subDirPath = overview.replace("/overview.md", "");
            var pathExists = fs.existsSync(path.join(subDirPath, "metadata.md"));

            if (pathExists) {
                var metadata = path.join(subDirPath, "metadata.md");
                var metadataContents = fs.readFileSync(metadata, { encoding: 'utf8' });
                var metadataSplit = metadataContents.split("---");
                fs.appendFileSync(componentArticleFile, "---\n", { encoding: 'utf8' });
                fs.appendFileSync(componentArticleFile, metadataSplit[1] , { encoding: 'utf8' });
                fs.appendFileSync(componentArticleFile, "---\n\n", { encoding: 'utf8' });

                if(metadataSplit[2].indexOf("example-order") >=0){
                    var exampleOrderString = metadataSplit[2].split(":");
                    var orderString  = exampleOrderString[1].replace(/\s/g,'');
                    componentArticlesOrder = orderString.split(",");
                }
            }
            else {
                fs.appendFileSync(componentArticleFile, "---\n",  {encoding:'utf8'});
                fs.appendFileSync(componentArticleFile, "title: " + componentPrettyHeader + "\n",  {encoding:'utf8'});
                fs.appendFileSync(componentArticleFile, "description: " + componentPrettyHeader + " SDK Examples" + "\n",  {encoding:'utf8'});
                fs.appendFileSync(componentArticleFile, "position: " + jenkinsPosition++  + "\n",  {encoding:'utf8'});
                fs.appendFileSync(componentArticleFile, "slug: " + componentHeader + "\n",  {encoding:'utf8'});
                fs.appendFileSync(componentArticleFile, "---\n\n",  {encoding:'utf8'});
            }
            
            // Component Markdown Header
            fs.appendFileSync(componentArticleFile, "# " + componentPrettyHeader + "\n\n",  {encoding:'utf8'});

            // Component Overview
            var overviewContents = fs.readFileSync(overview,  {encoding:'utf8'});
            fs.appendFileSync(componentArticleFile, overviewContents + "\n\n",  {encoding:'utf8'});

            // Component Images
            let componentImage = path.join(componentDirName, "image.png");
            if (fs.existsSync(componentImage)) {
                let newImageFileName = componentHeader + "-" + "image.png";
                fs.copySync(componentImage, path.join(imgDir, newImageFileName));

                fs.appendFileSync(componentArticleFile, "![Image](img/" + newImageFileName + " \"Image\")\n\n",  {encoding:'utf8'});
            }

            var articles = [];
            if(componentArticlesOrder.length >0){
                articles = orderExamples(glob.sync(componentDirName + "/**/article.md"), componentArticlesOrder, componentDirName);
            } else{
                articles = glob.sync(componentDirName + "/**/article.md").sort(compareFiles);
            }

            // Append each example to the big article file.
            articles.forEach(function (article) {
                var articleDirName = path.dirname(article);
                var articleHeader = path.basename(articleDirName);

                // Header
                var prettyArticleHeader = prettify(articleHeader);
                fs.appendFileSync(componentArticleFile, "## " + prettyArticleHeader + "\n\n",  {encoding:'utf8'});

                // Content
                var articleContents = fs.readFileSync(article,  {encoding:'utf8'});
                fs.appendFileSync(componentArticleFile, articleContents + "\n\n",  {encoding:'utf8'});

                // Article Images
                let articleImage = path.join(articleDirName, "image.png");

                if (fs.existsSync(articleImage)) {
                    let newArticleImageFileName = componentHeader + "-" + articleHeader + "-image.png";
                    let joined = path.join(imgDir, newArticleImageFileName);
                    fs.copySync(articleImage, joined);

                    fs.appendFileSync(componentArticleFile, "![Image](img/" + newArticleImageFileName + " \"Image\")\n\n",  {encoding:'utf8'});
                }
                let articleImages = glob.sync(articleDirName + "/*.png");
                articleImages.forEach(function(imagePath){
                    let stringSplitResult = imagePath.split("/");
                    let imageName = stringSplitResult[stringSplitResult.length - 1];
                    let joined = path.join(imgDir, imageName);
                    fs.copySync(imagePath, joined);
                })

                // Links
                var githubDirUrl = pjson.homepage + "/edit/master/" + path.relative(cwd, articleDirName).replace(/\\/g, "/");

                var linkToDocument = "[Improve this document](" + githubDirUrl + "/" + path.basename(article) + ")"
                fs.appendFileSync(componentArticleFile, linkToDocument + "\n\n",  {encoding:'utf8'});

                var linkToSource = "[Demo Source](" + githubDirUrl + ")"
                fs.appendFileSync(componentArticleFile, linkToSource + "\n\n",  {encoding:'utf8'});

                // Horizontal Line
                fs.appendFileSync(componentArticleFile, "---\n\n",  {encoding:'utf8'});
            });

            //End.md
            var subDirPath = overview.replace("/overview.md", "");
            var end = path.join(subDirPath, "end.md");
            var endContents = fs.readFileSync(end,  {encoding:'utf8'});
            fs.appendFileSync(componentArticleFile, endContents + "\n\n",  {encoding:'utf8'}); 
        });
}

build();
