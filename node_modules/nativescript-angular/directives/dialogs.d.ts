import { ComponentResolver, ViewContainerRef, Type } from '@angular/core';
import { Page } from 'ui/page';
export interface ModalDialogOptions {
    context?: any;
    fullscreen?: boolean;
}
export declare class ModalDialogParams {
    context: any;
    closeCallback: (...args) => any;
    constructor(context: any, closeCallback: (...args) => any);
}
export declare class ModalDialogService {
    private page;
    private compiler;
    private containerRef;
    constructor(page: Page, compiler: ComponentResolver);
    registerViewContainerRef(ref: ViewContainerRef): void;
    showModal(type: Type, options: ModalDialogOptions): Promise<any>;
}
export declare class ModalDialogHost {
    constructor(containerRef: ViewContainerRef, modalService: ModalDialogService);
}
