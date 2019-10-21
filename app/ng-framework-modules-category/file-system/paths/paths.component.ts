import { Component, OnInit } from "@angular/core";
// >> fs-paths-import-code
import { knownFolders, path, File, Folder } from "tns-core-modules/file-system";
// << fs-paths-import-code

@Component({
    moduleId: module.id,
    templateUrl: "./paths.component.html"
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
        let documentsFolder = knownFolders.documents();
        let currentAppFolder = knownFolders.currentApp();
        let tempFolder = knownFolders.temp();

        let testPath = "///test.txt";
        // Get a normalized path such as <folder.path>/test.txt from <folder.path>///test.txt
        this.documents = path.normalize(documentsFolder.path + testPath);
        this.currentApp = path.normalize(currentAppFolder.path + testPath);
        this.temp = path.normalize(tempFolder.path + testPath);
        // << fs-paths-normalize-code

        // >> fs-paths-join-code
        // Generate a path like <documents.path>/myFiles/test.txt
        documentsFolder = knownFolders.documents();
        let filePath = path.join(documentsFolder.path, "myFiles", "test.txt");
        // << fs-paths-join-code
        console.log(filePath);

        // >> fs-paths-separator-code
        // An OS dependent path separator, "\" or "/".
        let separator = path.separator;
        // << fs-paths-separator-code
        console.log(separator);

        // >> fs-paths-create-folder-code
        let folderPath = path.join(knownFolders.documents().path, "music");
        let folder = Folder.fromPath(folderPath);
        // << fs-paths-create-folder-code
        console.log(folder);
    }

    public onSaveContentToFile() {
        // >> fs-paths-create-file-code
        let documentsFolder = knownFolders.documents();
        let myPath = path.join(documentsFolder.path, "FileFromPath.txt");
        let file = File.fromPath(myPath);

        // Writing text to the file.
        file.writeText(this.textContentToBeSaved)
            .then(result => {
                // Succeeded writing to the file.
                file.readText().then(res => {
                    // Succeeded read from file.
                    this.isContentSaved = true;
                    this.savedContent = res;
                    console.log("File content: " + res);
                });
            }).catch(err => {
                console.log(err.stack);
            });
        // << fs-paths-create-file-code
    }
}
