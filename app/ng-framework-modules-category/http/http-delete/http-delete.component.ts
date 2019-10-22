// >> http-delete-component
import { Component, OnInit } from "@angular/core";
import { MyHttpDeleteService } from "./http-delete.service";

@Component({
    selector: "sdk-http-delete",
    moduleId: module.id,
    templateUrl: "./http-delete.component.html",
    providers: [MyHttpDeleteService]
})

export class HttpDeleteComponent implements OnInit {
    host: string;
    userAgent: string;
    origin: string;
    url: string;
    data: string;

    constructor(private myService: MyHttpDeleteService) { }

    ngOnInit() {
        this.extractData();
    }

    extractData() {
        this.myService.deleteData()
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
// << http-delete-component
