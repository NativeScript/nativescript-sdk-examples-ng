// >> http-put-service
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class MyHttpPutService {
    private serverUrl = "https://httpbin.org/put";

    constructor(private http: HttpClient) { }

    putData() {
        let headers = this.createRequestHeader();
        return this.http.put(this.serverUrl, { headers: headers });
    }

    private createRequestHeader() {
        // set headers here e.g.
        let headers = new HttpHeaders({
            "Content-Type": "application/json",
         });

        return headers;
    }
}
// << http-put-service
