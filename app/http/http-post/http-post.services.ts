// >> http-post-service
import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable as RxObservable } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class MyHttpPostService {
    private serverUrl = "https://httpbin.org/post";

    constructor(private http: Http) { }

    postData(data: any) {
        let options = this.createRequestOptions();
        return this.http.post(this.serverUrl, { data }, options)
            .map(res => res.json());
    }

    private createRequestOptions() {
        let headers = new Headers();
        headers.append("AuthKey", "my-key");
        headers.append("AuthToken", "my-token");
        headers.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers: headers });
        return options;
    }
}
// << http-post-service
