import { Component, OnInit } from "@angular/core";
// >> fs-paths-import-code
import * as fs from "file-system";
// << fs-paths-import-code
@Component({
    styleUrls:["file-system/paths/paths.component.css"],
    selector: 'paths-file-component',
    templateUrl: 'file-system/paths/paths.component.html'
})

export class PathsExampleComponent implements OnInit {
    public documents: string;
    public currentApp: string;
    public temp: string;

    public textContentToBeSaved: string = "";
    public isContentSaved: boolean = false;
    public savedContent: string;

    constructor() {
    }

    ngOnInit() {

        // >> fs-paths-normalize-code
        var documentsFolder = fs.knownFolders.documents();
        var currentAppFolder = fs.knownFolders.currentApp();
        var tempFolder = fs.knownFolders.temp();

        let testPath = "///test.txt";
        // Get a normalized path such as <folder.path>/test.txt from <folder.path>///test.txt
        this.documents = fs.path.normalize(documentsFolder.path + testPath);
        this.currentApp = fs.path.normalize(currentAppFolder.path + testPath);
        this.temp = fs.path.normalize(tempFolder.path + testPath);
        // << fs-paths-normalize-code

        // >> fs-paths-join-code
        // Generate a path like <documents.path>/myFiles/test.txt
        documentsFolder = fs.knownFolders.documents();
        var path = fs.path.join(documentsFolder.path, "myFiles", "test.txt");
        // << fs-paths-join-code

        // >> fs-paths-separator-code
        // An OS dependent path separator, "\" or "/".
        var separator = fs.path.separator;
        // << fs-paths-separator-code

        // >> fs-paths-create-folder-code
        var path = fs.path.join(fs.knownFolders.documents().path, "music");
        var folder = fs.Folder.fromPath(path);
        // << fs-paths-create-folder-code
    }

    public onSaveContentToFile() {
        // >> fs-paths-create-file-code
        var documentsFolder = fs.knownFolders.documents();
        var path = fs.path.join(documentsFolder.path, "FileFromPath.txt");
        var file = fs.File.fromPath(path);

        // Writing text to the file.
        file.writeText(this.textContentToBeSaved)
            .then(res =>  {
                // Succeeded writing to the file.
                file.readText().then(res => {
                    // Succeeded read from file.
                    this.isContentSaved = true;
                    this.savedContent = res;
                    console.log("File content: " + res);
                })
            }).catch(err => {
                // Error 
            }); ;    
        // << fs-paths-create-file-code
    }
}