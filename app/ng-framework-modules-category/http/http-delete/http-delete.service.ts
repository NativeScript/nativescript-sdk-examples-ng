// >> http-delete-service
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class MyHttpDeleteService {
    private serverUrl = "https://httpbin.org/delete";

    constructor(private http: HttpClient) { }

    deleteData() {
        let headers = this.createRequestHeader();
        return this.http.delete(this.serverUrl, { headers: headers });
    }

    private createRequestHeader() {
        // set headers here e.g.
        let headers = new HttpHeaders({
            "Content-Type": "application/json",
         });

        return headers;
    }
}
// << http-delete-service
