import { XHR } from "@angular/compiler/src/xhr";
export declare class FileSystemXHR extends XHR {
    resolve(url: string, baseUrl: string): string;
    get(url: string): Promise<string>;
}
