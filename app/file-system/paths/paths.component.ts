import { Component, OnInit } from "@angular/core";
// >> fs-paths-import-code
import * as fs from "file-system";
// << fs-paths-import-code
@Component({
    selector: "paths-file-component",
    templateUrl: "file-system/paths/paths.component.html"
})

export class PathsExampleComponent implements OnInit {
    public documents: string;
    public currentApp: string;
    public temp: string;

    public textContentToBeSaved: string = "";
    public isContentSaved: boolean = false;
    public savedContent: string;

    ngOnInit() {
        // >> fs-paths-normalize-code
        let documentsFolder = fs.knownFolders.documents();
        let currentAppFolder = fs.knownFolders.currentApp();
        let tempFolder = fs.knownFolders.temp();

        let testPath = "///test.txt";
        // Get a normalized path such as <folder.path>/test.txt from <folder.path>///test.txt
        this.documents = fs.path.normalize(documentsFolder.path + testPath);
        this.currentApp = fs.path.normalize(currentAppFolder.path + testPath);
        this.temp = fs.path.normalize(tempFolder.path + testPath);
        // << fs-paths-normalize-code

        // >> fs-paths-join-code
        // Generate a path like <documents.path>/myFiles/test.txt
        documentsFolder = fs.knownFolders.documents();
        let filePath = fs.path.join(documentsFolder.path, "myFiles", "test.txt");
        // << fs-paths-join-code
        console.log(filePath);

        // >> fs-paths-separator-code
        // An OS dependent path separator, "\" or "/".
        let separator = fs.path.separator;
        // << fs-paths-separator-code
        console.log(separator);

        // >> fs-paths-create-folder-code
        let folderPath = fs.path.join(fs.knownFolders.documents().path, "music");
        let folder = fs.Folder.fromPath(folderPath);
        // << fs-paths-create-folder-code
        console.log(folder);
    }

    public onSaveContentToFile() {
        // >> fs-paths-create-file-code
        let documentsFolder = fs.knownFolders.documents();
        let path = fs.path.join(documentsFolder.path, "FileFromPath.txt");
        let file = fs.File.fromPath(path);

        // Writing text to the file.
        file.writeText(this.textContentToBeSaved)
            .then(res => {
                // Succeeded writing to the file.
                file.readText().then(res => {
                    // Succeeded read from file.
                    this.isContentSaved = true;
                    this.savedContent = res;
                    console.log("File content: " + res);
                });
            }).catch(err => {
                console.log(err.stack);
            }); ;
        // << fs-paths-create-file-code
    }
}
