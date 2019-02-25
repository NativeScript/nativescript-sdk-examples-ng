// >> http-get-component
import { Component, OnInit } from "@angular/core";
import { MyHttpGetService } from "./http-get.services";

@Component({
    moduleId: module.id,
    templateUrl: "./http-get.component.html",
    providers: [MyHttpGetService] // using the providers array
})
export class HttpGetComponent implements OnInit {
    public host: string;
    public userAgent: string;
    public origin: string;
    public url: string;

    constructor(private myService: MyHttpGetService) { }

    ngOnInit() {
        this.extractData();
    }

    extractData() {
        this.myService.getData()
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
    }
}
// << http-get-component
