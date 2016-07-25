import { ComponentRef, ComponentFactory, ViewContainerRef, Type, ComponentResolver, ChangeDetectorRef } from '@angular/core';
export declare const CATEGORY: string;
/**
 * Wrapper component used for loading components when navigating
 * It uses DetachedContainer as selector so that it is containerRef is not attached to the visual tree.
 */
export declare class DetachedLoader {
    private compiler;
    private changeDetector;
    private containerRef;
    childContainerRef: ViewContainerRef;
    private viewLoaded;
    private pendingLoads;
    constructor(compiler: ComponentResolver, changeDetector: ChangeDetectorRef, containerRef: ViewContainerRef);
    ngAfterViewInit(): void;
    private loadInLocation(componentType);
    loadComponent(componentType: Type): Promise<ComponentRef<any>>;
    loadWithFactory<T>(factory: ComponentFactory<T>): ComponentRef<T>;
}
