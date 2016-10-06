import { Component, NgZone } from "@angular/core";
// >> import-http-module
import {request} from "http"
// << import-http-module

@Component({
    selector: 'http-module-post-component',
    styleUrls:['httpModule/http-module-post/http-module-post.css'],
    templateUrl: 'httpModule/http-module-post/http-module-post.html'
})

export class HTTPModulePostExampleComponent {
    public name:string = "";
    public username:string = "";
    public custom_text:string = "";

    public makePOSTRequest(){
        // >> post-request-http-module
        request({
                url: "https://httpbin.org/post",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                content: JSON.stringify({ Name: this.name, Username: this.username, Text: this.custom_text })
            }).then(function (response) {
                var result = response.content.toJSON();
                alert("Result :"+JSON.stringify(result.json));
            }, function (e) {
                alert("Error: "+e)
                 console.log("Error occurred " + e);
            });
        // << post-request-http-module
    }
}