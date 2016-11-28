import { Component } from "@angular/core";

@Component({
    selector: "fetch-post-component",
    templateUrl: "fetch/fetch-post/fetch-post.component.html"
})

export class FetchPostExampleComponent {
    public user: string;
    public pass: string;
    public message: string = "";

    submit() {
        // >> fetch-post-code
        fetch("https://httpbin.org/post", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: this.user , password: this.pass })
        }).then(response => {
            return response.json();
        }).then(res => {
            let jsonObjectBody = JSON.parse(res.data);
            this.message = "Data successfully send by user " + jsonObjectBody.username;
        }).catch(err => {
            // Error 
        });
        // << fetch-post-code 
    }

}
