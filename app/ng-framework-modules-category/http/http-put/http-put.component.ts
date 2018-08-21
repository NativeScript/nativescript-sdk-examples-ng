// >> http-put-component
import { Component, OnInit } from "@angular/core";
import { MyHttpPutService } from "./http-put.services";

@Component({
    selector: "sdk-http-put",
    moduleId: module.id,
    templateUrl: "./http-put.component.html",
    providers: [MyHttpPutService]
})

export class HttpPutComponent implements OnInit {
    host: string;
    userAgent: string;
    origin: string;
    url: string;
    data: string;

    constructor(private myService: MyHttpPutService) { }

    ngOnInit() {
        this.extractData();
    }

    extractData() {
        this.myService.putData()
            .subscribe((result) => {
                this.onGetDataSuccess(result);
            }, (error) => {
                console.log(error);
            });
    }

    private onGetDataSuccess(res) {
        this.host = res.headers.Host;
        this.userAgent = res.headers["User-Agent"];
        this.origin = res.origin;
        this.url = res.url;
        this.data = res.data;
    }
}
// << http-put-component
