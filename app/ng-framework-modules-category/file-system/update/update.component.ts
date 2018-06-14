import { Component, OnInit } from "@angular/core";
// >> fs-update-import-code
import * as fs from "file-system";
// << fs-update-import-code
@Component({
    moduleId: module.id,
    templateUrl: "./update.component.html"
})
export class UpdateExampleComponent implements OnInit {

    public documents: fs.Folder;
    public file: fs.File;
    public myFolder: fs.Folder;

    public fileName: string = "TestFileName";
    public fileSuccessMessage: string;
    public isItemVisible: boolean = false;

    public folderName: string = "TestFolderName";
    public folderSuccessMessage: string;
    public isFolderItemVisible: boolean = false;

    ngOnInit() {
        this.documents = fs.knownFolders.documents();
        this.file = this.documents.getFile("TestFileName.txt");
        this.myFolder = this.documents.getFolder("TestFolderName");
    }

    public onFileRename() {
        // >> fs-update-rename-file-code
        this.file.rename(this.fileName + ".txt")
            .then(res => {
                // File Successfully Renamed.
                this.fileSuccessMessage = "File renamed to: " + this.fileName + ".txt";
                this.isItemVisible = true;
            }).catch(err => {
                // Error!
            });
        // << fs-update-rename-file-code
    }

    public onFolderRename() {
        // >> fs-update-rename-folder-code
        this.myFolder.rename(this.folderName)
            .then(res => {
                // Folder Successfully Renamed.
                this.folderSuccessMessage = "Folder renamed to: " + this.folderName;
                this.isFolderItemVisible = true;
            }).catch(err => {
                // Error!
            });
        // << fs-update-rename-folder-code
    }
}
