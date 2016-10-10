import { Component, OnInit } from "@angular/core";

@Component({
    styleUrls:["fetch/fetch-get/fetch-get.component.css"],
    selector: 'fetch-get-component',
    templateUrl: 'fetch/fetch-get/fetch-get.component.html'
})

export class FetchGetExampleComponent implements OnInit {
    public host: string;
    public userAgent: string;
    public origin: string;
    public url: string;
    public status: number;
    public statusText: string;

    public dateHeader: string;
    public connectionHeader: string;
    public typeHeader: string;
    public serverHeader: string;

    ngOnInit() {
        // >> fetch-res-url-code
        fetch("https://httpbin.org/get", {
            method: 'get'
        }).then(res => {
            // Argument (res) is Response object!
        }).catch(err => {
            // Error 
        });   
        // << fetch-res-url-code 

        // >> fetch-res-string-code
        fetch("https://httpbin.org/get", {
            method: 'get'
        }).then(response => { 
            return response.text(); 
        }).then(res => {
            // Argument (res) is string!
        }).catch(err => {
            // Error 
        });   
        // << fetch-res-string-code 
 
        // >> fetch-res-json-code
        fetch("https://httpbin.org/get", {
            method: 'get'
        }).then(response => { 
            return response.json(); 
        }).then(res => {
            // Argument (res) is JSON Object!
            console.log("Response json:");
            console.log(res.headers.Host);
            console.log(res.headers["User-Agent"]);
            console.log(res.origin);
            console.log(res.url);

            this.host = res.headers.Host;
            this.userAgent = res.headers["User-Agent"];
            this.origin = res.origin;
            this.url = res.url;

        }).catch(err => {
            // Error 
        });   
        // << fetch-res-json-code 

        // >> fetch-res-form-code
        fetch("https://httpbin.org/get", {
            method: 'get'
        }).then(response => { 
            return response.formData(); 
        }).then(res => {
            // Argument (res) is FormData object!
        }).catch(err => {
            // Error 
        });   
        // << fetch-res-form-code 

        // >> fetch-res-status-code
        fetch("https://httpbin.org/get", {
            method: 'get'
        }).then(response => { 
            this.status = response.status;
            this.statusText = response.statusText;
        }).catch(err => {
            // Error 
        });   
        // << fetch-res-status-code 

        // >> fetch-res-headers-code
        fetch("https://httpbin.org/get", {
            method: 'get'
        }).then(response => { 
            this.typeHeader = response.headers.get("Content-Type");
            this.dateHeader = response.headers.get("Date");
            this.connectionHeader = response.headers.get("Connection");
            this.serverHeader = response.headers.get("Server");
        }).catch(err => {
            // Error 
        });   
        // << fetch-res-headers-code 
    }
}