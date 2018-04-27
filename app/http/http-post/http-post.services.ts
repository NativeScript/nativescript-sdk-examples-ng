// >> http-post-service
import { Injectable } from "@angular/core";
import { Observable as RxObservable } from "rxjs";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

@Injectable()
export class MyHttpPostService {
    private serverUrl = "https://httpbin.org/post";

    constructor(private http: HttpClient) { }

    postData(data: any) {
        let options = this.createRequestOptions();
        return this.http.post(this.serverUrl, { data }, { headers: options });
    }

    private createRequestOptions() {
        let headers = new HttpHeaders({
            "AuthKey": "my-key",
            "AuthToken": "my-token",
            "Content-Type": "application/json"
        });
        return headers;
    }
}
// << http-post-service
