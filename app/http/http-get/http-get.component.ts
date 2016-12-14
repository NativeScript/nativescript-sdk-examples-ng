// >> http-get-component
import { Component, OnInit } from "@angular/core";
import { MyHttpGetService } from "./http-get.services";

@Component({
    moduleId: module.id,
    templateUrl: "./http-get.component.html",
    providers: [MyHttpGetService]
})
export class HttpGetComponent implements OnInit {
    public host: string;
    public userAgent: string;
    public origin: string;
    public url: string;
    public status: number;
    public statusText: string;
    public dateHeader: string;
    public typeHeader: string;
    public serverHeader: string;

    constructor(private myService: MyHttpGetService) { };

    ngOnInit() {
        this.extractData();
        this.extractResponseInfo();
    }

    extractData() {
        this.myService.getData()
            .subscribe(
            (result) => this.onGetDataSuccess(result),
            (error) => this.onGetDataError(error)
            );
    }

    extractResponseInfo() {
        this.myService.getResponseInfo()
            .subscribe(res => {
                this.status = res.status;
                this.statusText = res.statusText;
                this.typeHeader = res.headers.get("Content-Type");
                this.dateHeader = res.headers.get("Date");
                this.serverHeader = res.headers.get("Server");
            }, (error) => console.log("onGetResponseInfo" + error));
    }

    private onGetDataSuccess(res) {
        this.host = res.headers.Host;
        this.userAgent = res.headers["User-Agent"];
        this.origin = res.origin;
        this.url = res.url;
    }

    private onGetDataError(error: Response | any) {
        const body = error.json() || "";
        const err = body.error || JSON.stringify(body);
        console.log("onGetDataError: " + err);
    }
}
// << http-get-component

