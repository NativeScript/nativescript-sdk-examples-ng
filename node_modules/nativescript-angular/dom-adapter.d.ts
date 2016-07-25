import { ElementSchemaRegistry } from '@angular/compiler';
import { SanitizationService } from '@angular/core/src/security';
import { Parse5DomAdapter } from '@angular/platform-server/src/parse5_adapter';
import { Type } from '@angular/core/src/facade/lang';
export declare enum SecurityContext {
    NONE = 0,
    HTML = 1,
    STYLE = 2,
    SCRIPT = 3,
    URL = 4,
    RESOURCE_URL = 5,
}
export declare class NativeScriptElementSchemaRegistry extends ElementSchemaRegistry {
    hasProperty(tagName: string, propName: string): boolean;
    getMappedPropName(propName: string): string;
    securityContext(tagName: string, propName: string): any;
}
export declare class NativeScriptSanitizationService extends SanitizationService {
    sanitize(context: SecurityContext, value: string): string;
}
export declare class NativeScriptDomAdapter extends Parse5DomAdapter {
    static makeCurrent(): void;
    getXHR(): Type;
    hasProperty(element: any, name: string): boolean;
}
