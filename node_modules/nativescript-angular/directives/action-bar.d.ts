import { ElementRef } from '@angular/core';
import { Page } from "ui/page";
export declare class ActionBarComponent {
    element: ElementRef;
    private page;
    constructor(element: ElementRef, page: Page);
}
export declare class ActionBarScope {
    private page;
    constructor(page: Page);
    onNavButtonInit(navBtn: NavigationButtonDirective): void;
    onNavButtonDestroy(navBtn: NavigationButtonDirective): void;
    onActionInit(item: ActionItemDirective): void;
    onActionDestroy(item: ActionItemDirective): void;
}
export declare class ActionItemDirective {
    element: ElementRef;
    private ownerScope;
    constructor(element: ElementRef, ownerScope: ActionBarScope);
    ngOnDestroy(): void;
}
export declare class NavigationButtonDirective {
    element: ElementRef;
    private ownerScope;
    constructor(element: ElementRef, ownerScope: ActionBarScope);
    ngOnDestroy(): void;
}
