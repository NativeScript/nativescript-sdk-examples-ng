import { Component } from "@angular/core";
// >> fs-delete-import-code
import * as fs from "file-system";
// << fs-delete-import-code
@Component({
    selector: 'delete-file-component',
    templateUrl: 'file-system/delete/delete.component.html'
})

export class DeleteExampleComponent {
    
    public documents: fs.Folder;
    public file: fs.File;
    public myFolder: fs.Folder;

    public resultMessage: string = "";

    constructor() {
        this.documents = fs.knownFolders.documents();
        this.myFolder = this.documents.getFolder("TestFolderName");
        this.file = this.myFolder.getFile("TestFileName.txt");
    }

    public onDeleteFile() {
        if (this.file) {
            // >> fs-delete-file-code
            this.file.remove()
                .then(res => {
                    // Success removing the file.
                    this.resultMessage = "File successfully deleted!";
                }).catch(err => {
                    console.log(err.stack);
                });
            // << fs-delete-file-code    
        } else {
            this.resultMessage = "Already deleted file!";
        }
    }

    public onDeleteFolder() {
        if(this.myFolder) {
            // >> fs-delete-folder-code
            // Remove a folder and recursively its content.
            this.myFolder.remove()
                .then(fres => {
                    // Success removing the folder.
                    this.resultMessage = "Folder successfully deleted!";
                }).catch(err => {
                    console.log(err.stack);
                });
            // << fs-delete-folder-code    
        } else {
            this.resultMessage = "Already deleted folder!";
        }
    }

    public onClearFolder() {
        if(this.myFolder) {
            // >> fs-clear-folder-code
            this.myFolder.clear()
                .then(res =>  {
                    // Successfully cleared the folder.
                    this.resultMessage = "Folder successfully cleared!";
                }).catch(err => {
                    console.log(err.stack);
                });
            // << fs-clear-folder-code    
        } else {
            this.resultMessage = "Cannot clear already deleted folder";
        }
    }

    public onReset() {
        this.documents = fs.knownFolders.documents();
        this.myFolder = this.documents.getFolder("TestFolderName");
        this.file = this.myFolder.getFile("TestFileName.txt");
        this.resultMessage = "Successfully reset!";
    }
}