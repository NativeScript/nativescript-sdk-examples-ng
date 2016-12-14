import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable as RxObservable } from "rxjs/Rx";

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Injectable()
export class MyHttpService {
    private serverUrl = "https://httpbin.org/get";

    constructor(private http: Http) { }

    getData() {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers })
            .map(res => res.json());
    }

    getResponseInfo() {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers })
            .do(res => res);
    }

    private createRequestHeader() {
        let headers = new Headers();
        // set headers here e.g.
        headers.append("AuthKey", "my-key");
        headers.append("AuthToken", "my-token");
        return headers;
    }
}
