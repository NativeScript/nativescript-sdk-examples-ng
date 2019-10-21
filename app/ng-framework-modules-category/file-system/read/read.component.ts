import { Component, OnInit } from "@angular/core";
import * as imageSource from "tns-core-modules/image-source";
// >> fs-read-import-code
import { knownFolders, path, File, Folder } from "tns-core-modules/file-system";
// << fs-read-import-code

@Component({
    moduleId: module.id,
    templateUrl: "./read.component.html"
})
export class ReadExampleComponent implements OnInit {

    public folderName: string;
    public fileName: string;
    public fileTextContent: string;
    public writtenContent: string;
    public documents: Folder;
    public folder: Folder;
    public file: File;
    public imageFile: File;
    public binarySource: string;
    public folderEntities: Array<FolderEntity> = [];

    ngOnInit() {
        this.folderName = "NativeScript";
        this.fileName = "README.txt";
        this.fileTextContent = "Build amazing iOS and Android apps with technology you already know" +
            "Open source framework for building truly native mobile apps" +
            "with Angular, TypeScript or JavaScript.";

        this.documents = knownFolders.documents();
        this.folder = this.documents.getFolder(this.folderName);
        this.file = this.folder.getFile(this.fileName);

        this.file.writeText(this.fileTextContent)
            .then(result => {
                // >> fs-read-text-code
                this.file.readText()
                    .then(res => {
                        this.writtenContent = res;
                    }).catch(err => {
                        console.log(err.stack);
                    });
                // << fs-read-text-code
            }).catch(err => {
                console.log(err);
            });

        // >> fs-folder-content-code
        this.documents = knownFolders.documents();
        this.documents.getEntities()
            .then(entities => {
                // entities is array with the document's files and folders.
                entities.forEach(entity => {
                    // console.log(entity.name);
                    // console.log(entity.path);
                    // console.log(entity.lastModified);
                    this.folderEntities.push(
                        new FolderEntity(entity.name, entity.path, entity.lastModified.toString())
                    );
                });
            }).catch(err => {
                // Failed to obtain folder's contents.
                console.log(err.stack);
            });
        // << fs-folder-content-code

        // >> fs-file-exists-check-code
        this.documents = knownFolders.documents();
        let myPath = path.join(this.documents.path, "Text.txt");
        let exists = File.exists(myPath);
        console.log("Does Text.txt exists: " + exists);
        // << fs-file-exists-check-code

        // >> fs-folder-exists-check-code
        let temp = knownFolders.temp();
        let tempExists = Folder.exists(temp.path);
        console.log("Does temp folder exists: " + tempExists);
        // << fs-folder-exists-check-code
    }

    public onReadSync() {
        // >> fs-read-sync-code
        let image = imageSource.fromResource("icon");
        let folder = knownFolders.documents();
        let myPath = path.join(folder.path, "Test.png");
        let saved = image.saveToFile(myPath, "png");

        if (saved) {
            this.imageFile = File.fromPath(myPath);
            this.binarySource = this.imageFile.readSync(err => { console.log("Error:" + err); });
            console.log(this.binarySource);
            // << fs-read-sync-code

            // >> fs-write-sync-code
            this.imageFile.writeSync(this.binarySource, err => {
                console.log(err);
            });
            // << fs-write-sync-code

            this.binarySource = "Successfully read binary data: " + this.binarySource;
        }
    }
}

class FolderEntity {
    private name: string;
    private myPath: string;
    private lastModified: string;

    constructor(name: string, myPath: string, lastModified: string) {
        this.name = name;
        this.myPath = myPath;
        this.lastModified = lastModified;
    }
}
