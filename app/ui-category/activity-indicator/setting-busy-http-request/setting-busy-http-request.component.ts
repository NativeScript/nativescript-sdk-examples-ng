// >> activity-indicator-setting-busy-code
import { Component, AfterViewInit } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

@Component({
    moduleId: module.id,
    templateUrl: "./setting-busy-http-request.component.html"
})
export class SettingBusyHttpRequestComponent implements AfterViewInit {
    public originatingIp = "";
    public status = "";
    public slept = "_";
    public response = "";
    public isBusy = true;
    private serverUrl = "http://www.fakeresponse.com/api/?sleep=5";

    constructor(private http: HttpClient) {}

    ngAfterViewInit() {
        let headers = this.createRequestHeader();
            this.http.get(this.serverUrl, { headers: headers })
            .subscribe(
                data => {
                    this.originatingIp = data["meta"]["originating_ip"];
                    this.status = data["status"];
                    this.slept = data["slept"];
                    this.response = data["response"];
                    this.isBusy = false;
                },
                err => {
                  console.log("Error occured.");
                  console.log(err);
                }
              );
    }

    private createRequestHeader() {
        let headers = new HttpHeaders();
        // set headers here e.g.
        headers.append("AuthKey", "my-key");
        headers.append("AuthToken", "my-token");
        headers.append("Content-Type", "application/json");

        return headers;
    }
}
// << activity-indicator-setting-busy-code
