import { Component } from "@angular/core";
// >> import-http-module
import { request } from "http";
// << import-http-module

@Component({
    moduleId: module.id,
    templateUrl: "http/http-post/http-post.html"
})
export class HttpPostComponent {
    public name: string = "";
    public username: string = "";
    public customText: string = "";

    public makePOSTRequest() {
        // >> post-request-http-module
        request({
            url: "https://httpbin.org/post",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ Name: this.name, Username: this.username, Text: this.customText })
        }).then(response => {
            let result = response.content.toJSON();
            alert("Result :" + JSON.stringify(result.json));
        }).catch(err => {
            console.log("Error occurred " + err.stack);
        });
        // << post-request-http-module
    }
}
