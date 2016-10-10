import { Component } from "@angular/core";
import * as imageSource from "image-source";
// >> fs-read-import-code
import * as fs from "file-system";
// << fs-read-import-code
@Component({
    styleUrls: ["file-system/read/read.component.css"],
    selector: 'read-file-component',
    templateUrl: 'file-system/read/read.component.html'
})

export class ReadExampleComponent {

    public folderName: string;
    public fileName: string;
    public fileTextContent: string;
    public writtenContent: string;
    public documents: fs.Folder;
    public folder: fs.Folder;
    public file: fs.File;
    public imageFile: fs.File;
    public binarySource: string;
    public folderEntities: Array<FolderEntity> = [];

    ngOnInit() {
        this.folderName = "NativeScript";
        this.fileName = "README.txt";
        this.fileTextContent = "Build amazing iOS and Android apps with technology you already know" +
            "Open source framework for building truly native mobile apps" +
            "with Angular, TypeScript or JavaScript.";

        this.documents = fs.knownFolders.documents();
        this.folder = this.documents.getFolder(this.folderName);
        this.file = this.folder.getFile(this.fileName);

        this.file.writeText(this.fileTextContent)
            .then(res => {
                // >> fs-read-text-code
                this.file.readText()
                    .then(res => {
                        this.writtenContent = res;
                    }).catch(err => {
                        console.log(err.stack);
                    })
                // << fs-read-text-code    
            }).catch(err => {
                console.log(err);
            });

        // >> fs-folder-content-code
        this.documents = fs.knownFolders.documents();
        this.documents.getEntities()
            .then(entities => {
                // entities is array with the document's files and folders.
                entities.forEach(entity => {
                    // console.log(entity.name);
                    // console.log(entity.path);
                    // console.log(entity.lastModified);
                    this.folderEntities.push(new FolderEntity(entity.name, entity.path, entity.lastModified.toString()));
                });
            }).catch(err => {
                // Failed to obtain folder's contents.
                console.log(err.stack);
            });
        // << fs-folder-content-code

        // >> fs-file-exists-check-code
        this.documents = fs.knownFolders.documents();
        let path = fs.path.join(this.documents.path, "Text.txt");
        let exists = fs.File.exists(path);
        console.log("Does Text.txt exists: " + exists);
        // << fs-file-exists-check-code

        // >> fs-folder-exists-check-code
        let temp = fs.knownFolders.temp();
        let tempExists = fs.Folder.exists(temp.path);
        console.log("Does temp folder exists: " + tempExists);
        // << fs-folder-exists-check-code
    }

    public onReadSync() {
        // >> fs-read-sync-code
        let image = imageSource.fromResource("icon");
        let folder = fs.knownFolders.documents();
        let path = fs.path.join(folder.path, "Test.png");
        let saved = image.saveToFile(path, "png");

        if (saved) {
            this.imageFile = fs.File.fromPath(path);
            this.binarySource = this.imageFile.readSync(err => { console.log("Error:" + err); });
            console.log(this.binarySource);
            // << fs-read-sync-code

            // >> fs-write-sync-code
            this.imageFile.writeSync(this.binarySource, err => {
                console.log(err)
            });
            // << fs-write-sync-code

            this.binarySource = "Successfully read binary data: " + this.binarySource;
        }
    }
}

class FolderEntity {
    private name: string;
    private path: string;
    private lastModified: string;

    constructor(name: string, path: string, lastModified: string) {
        this.name = name;
        this.path = path;
        this.lastModified = lastModified;
    }
}