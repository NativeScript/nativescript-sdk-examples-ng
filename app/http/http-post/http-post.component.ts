// >> http-post-component
import { Component, OnInit } from "@angular/core";
import { MyHttpPostService } from "./http-post.services";

@Component({
    moduleId: module.id,
    templateUrl: "./http-post.component.html",
    providers: [MyHttpPostService]
})
export class HttpPostComponent {
    public user: string;
    public pass: string;
    public message: string = "";
    // >> (hide)
    public isItemVisible: boolean = false;
    // << (hide)

    constructor(private myPostService: MyHttpPostService) { }

    public submit() {
        this.makePostRequest();
    }

    private makePostRequest() {
        this.myPostService
            .postData({ username: this.user, password: this.pass })
            .subscribe(res => {
                this.message = res.json.data.username;
                // >> (hide)
                this.isItemVisible = true;
                // << (hide)
            });
    }
}
// << http-post-component
