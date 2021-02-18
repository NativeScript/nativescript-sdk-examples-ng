import { Component } from "@angular/core";
// >> fs-create-import-code
import { knownFolders, path, File, Folder } from "@nativescript/core";
// << fs-create-import-code

@Component({
    moduleId: module.id,
    templateUrl: "./usage.component.html"
})
export class CreateExampleComponent {
    public folderName: string;
    public fileName: string;
    public fileTextContent: string;

    public successMessage: string;
    public writtenContent: string;
    public isItemVisible: boolean = false;

    public file: File;
    public folder: Folder;

    public onCreateFile() {
        // >> fs-create-all-code
        let documents = knownFolders.documents();
        this.folder = documents.getFolder(this.folderName || "testFolder");
        this.file = this.folder.getFile((this.fileName || "testFile") + ".txt");

        this.file.writeText(this.fileTextContent || "some random content")
            .then(result => {
                this.file.readText()
                    .then(res => {
                        this.successMessage = "Successfully saved in " + this.file.path;
                        this.writtenContent = res;
                        this.isItemVisible = true;
                    });
            }).catch(err => {
                console.log(err);
            });
        // << fs-create-all-code
    }
}
