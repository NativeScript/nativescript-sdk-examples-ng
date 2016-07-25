import { View } from 'ui/core/view';
export declare type ViewResolver = () => ViewClass;
export declare type NgView = View & ViewExtensions;
export interface ViewClassMeta {
    skipAddToDom?: boolean;
    insertChild?: (parent: NgView, child: NgView, atIndex: number) => void;
    removeChild?: (parent: NgView, child: NgView) => void;
}
export interface ViewExtensions {
    nodeName: string;
    templateParent: NgView;
    cssClasses: Map<string, boolean>;
    meta: ViewClassMeta;
}
export interface ViewClass {
    new (): View;
}
export declare function registerElement(elementName: string, resolver: ViewResolver, meta?: ViewClassMeta): void;
export declare function getViewClass(elementName: string): ViewClass;
export declare function getViewMeta(nodeName: string): ViewClassMeta;
export declare function isKnownView(elementName: string): boolean;
