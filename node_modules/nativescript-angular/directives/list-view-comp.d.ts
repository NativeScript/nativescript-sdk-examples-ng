import { DoCheck, OnDestroy, ElementRef, ViewContainerRef, TemplateRef, EmbeddedViewRef, IterableDiffers, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { ListView } from 'ui/list-view';
export declare class ListItemContext {
    $implicit: any;
    item: any;
    index: number;
    even: boolean;
    odd: boolean;
    constructor($implicit?: any, item?: any, index?: number, even?: boolean, odd?: boolean);
}
export interface SetupItemViewArgs {
    view: EmbeddedViewRef<any>;
    data: any;
    index: number;
}
export declare class ListViewComponent implements DoCheck, OnDestroy {
    private _elementRef;
    private _iterableDiffers;
    private _cdr;
    nativeElement: ListView;
    private listView;
    private _items;
    private _differ;
    loader: ViewContainerRef;
    setupItemView: EventEmitter<SetupItemViewArgs>;
    itemTemplate: TemplateRef<ListItemContext>;
    items: any;
    constructor(_elementRef: ElementRef, _iterableDiffers: IterableDiffers, _cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
    onItemLoading(args: any): void;
    setupViewRef(viewRef: EmbeddedViewRef<ListItemContext>, data: any, index: number): void;
    private detectChangesOnChild(viewRef, index);
    ngDoCheck(): void;
}
