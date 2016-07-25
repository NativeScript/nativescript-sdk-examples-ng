import 'globals';
import "zone.js/dist/zone-node";
import 'reflect-metadata';
import './polyfills/array';
import './polyfills/console';
import { Type } from '@angular/core/src/facade/lang';
import { EventEmitter, ComponentRef } from '@angular/core';
import { Provider } from '@angular/core/src/di';
export declare type ProviderArray = Array<Type | Provider | any[]>;
export interface AppOptions {
    cssFile?: string;
    startPageActionBarHidden?: boolean;
}
export declare const onBeforeLivesync: EventEmitter<ComponentRef<any>>;
export declare const onAfterLivesync: EventEmitter<ComponentRef<any>>;
export declare const NS_COMPILER_PROVIDERS: ProviderArray;
export declare function bootstrap(appComponentType: any, customProviders?: ProviderArray): Promise<ComponentRef<any>>;
export declare function nativeScriptBootstrap(appComponentType: any, customProviders?: ProviderArray, appOptions?: AppOptions): Promise<ComponentRef<any>>;
