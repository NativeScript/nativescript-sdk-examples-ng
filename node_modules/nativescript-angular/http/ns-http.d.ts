import { Http, ConnectionBackend, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { NSFileSystem } from '../file-system/ns-file-system';
export declare class NSXSRFStrategy {
    configureRequest(req: any): void;
}
export declare class NSHttp extends Http {
    private nsFileSystem;
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, nsFileSystem: NSFileSystem);
    /**
     * Performs a request with `get` http method.
     * Uses a local file if `~/` resource is requested.
     */
    get(url: string, options?: RequestOptionsArgs): Observable<Response | any>;
}
