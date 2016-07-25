import { ElementRef, TemplateRef, ViewContainerRef } from "@angular/core";
import { TabView } from "ui/tab-view";
export declare class TabViewDirective {
    private element;
    tabView: TabView;
    private _selectedIndex;
    private viewInitialized;
    selectedIndex: number;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
}
export declare class TabViewItemDirective {
    private owner;
    private templateRef;
    private viewContainer;
    private item;
    constructor(owner: TabViewDirective, templateRef: TemplateRef<any>, viewContainer: ViewContainerRef);
    config: any;
    ngOnInit(): void;
}
