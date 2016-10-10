import { Component, OnInit } from "@angular/core";
// >> import-http-module-get
import { getFile, getImage, getJSON, getString, request } from "http";
// << import-http-module-get
import { isAndroid } from "platform"
import { path, knownFolders, File } from "file-system";
import { Page } from "ui/page";
import { fromFile } from "image-source";
import { Image } from "ui/image"

@Component({
    selector: 'http-module-get-component',
    styleUrls: ['httpModule/http-module-get/http-module-get.css'],
    templateUrl: 'httpModule/http-module-get/http-module-get.html'
})

export class HTTPModuleGetExampleComponent implements OnInit {
    public stringResponce: string = "";
    public host: string = "";
    public userAgent: string = "";
    public origin: string = "";
    public url: string = "";
    public status: number = 0;
    public statusText: string = "";
    public dateHeader: string = "";
    public connectionAcceptLanguage: string = "";
    public typeHeader: string = "";
    public serverHeader: string = "";
    public imagesource;

    constructor(private page: Page) { };

    ngOnInit() {
        var platformName = "iOS";

        if (isAndroid) {
            platformName = "Android"
        }
        // >> getstring-http-module
        getString("https://httpbin.org/get").then((r) => {
            this.stringResponce = r;
            console.log(r);
        }, (e) => {
            alert("GetString: " + e);
        });
        // << getstring-http-module
        // >> getJSON-http-module
        getJSON("https://httpbin.org/get")
            .then((r) => {
                this.origin = (<any>r).origin;
                this.url = (<any>r).url;
            }, (e) => {
                alert("GetJSON: " + e)
            });
        // << getJSON-http-module
        // >> getImage-http-module
        getImage("https://httpbin.org/image/jpeg")
            .then((r) => {
                this.imagesource = r;
            }, (e) => {
                alert("GetImage: " + e);
            });
        // << getImage-http-module
        // >> getFile-http-module
        var filePath = path.join(knownFolders.documents().path, "test.png");

        getFile("https://httpbin.org/image/jpeg", filePath)
            .then((r: File) => {
                var image: Image = <Image>this.page.getViewById("imageId");
                image.imageSource = fromFile(r.path);
            }, (e) => {
                alert("GetFile: " + e);
            });
        // << getFile-http-module
        // >> getFile-http-moduled-specify-file-path
        filePath = path.join(knownFolders.documents().path, "test.png");
        getFile("https://httpbin.org/image/png", filePath)
            .then((r: File) => {
                var image: Image = <Image>this.page.getViewById("secondimageId");
                image.imageSource = fromFile(r.path);
            }, (e) => {
                alert("GetFile: " + e);
            });
        // << getFile-http-moduled-specify-file-path
        // >> get-request-http-module
        request({ url: "https://httpbin.org/get", method: "GET" })
            .then((response) => {
                var header = (<any>response.headers);
                this.dateHeader = header["Date"];
                this.connectionAcceptLanguage = header["Accept-Language"];
                this.typeHeader = header["Content-Type"];
                this.serverHeader = header["Server"];
                this.host = header["Host"];
                this.userAgent = header["User-Agent"];
                this.status = response.statusCode;

            }, (e) => {
                alert("Request: " + e);
            });
        // << get-request-http-module
    }
}