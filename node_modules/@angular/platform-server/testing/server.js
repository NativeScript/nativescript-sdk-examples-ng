"use strict";
var testing_1 = require('@angular/common/testing');
var compiler_1 = require('@angular/compiler');
var testing_2 = require('@angular/compiler/testing');
var core_1 = require('@angular/core');
var testing_3 = require('@angular/platform-browser/testing');
var core_private_1 = require('../core_private');
var platform_browser_dynamic_testing_private_1 = require('../platform_browser_dynamic_testing_private');
var parse5_adapter_1 = require('../src/parse5_adapter');
var platform_browser_1 = require('@angular/platform-browser');
var platform_browser_private_1 = require('../platform_browser_private');
var common_1 = require('@angular/common');
var testing_4 = require('@angular/core/testing');
function initServerTests() {
    parse5_adapter_1.Parse5DomAdapter.makeCurrent();
    testing_3.BrowserDetection.setup();
}
/**
 * Default platform providers for testing.
 */
exports.TEST_SERVER_PLATFORM_PROVIDERS = 
/*@ts2dart_const*/ [
    core_1.PLATFORM_COMMON_PROVIDERS,
    /*@ts2dart_Provider*/ {
        provide: core_1.PLATFORM_INITIALIZER,
        useValue: initServerTests,
        multi: true
    }
];
function appDoc() {
    try {
        return platform_browser_private_1.getDOM().defaultDoc();
    }
    catch (e) {
        return null;
    }
}
function createNgZone() {
    return new core_1.NgZone({ enableLongStackTrace: true });
}
/**
 * Default application providers for testing.
 */
exports.TEST_SERVER_APPLICATION_PROVIDERS = 
/*@ts2dart_const*/ [
    // TODO(julie: when angular2/platform/server is available, use that instead of making our own
    // list here.
    core_1.APPLICATION_COMMON_PROVIDERS, compiler_1.COMPILER_PROVIDERS, platform_browser_1.BROWSER_SANITIZATION_PROVIDERS,
    /* @ts2dart_Provider */ { provide: platform_browser_1.DOCUMENT, useFactory: appDoc },
    /* @ts2dart_Provider */ { provide: platform_browser_private_1.DomRootRenderer, useClass: platform_browser_private_1.DomRootRenderer_ },
    /* @ts2dart_Provider */ { provide: core_1.RootRenderer, useExisting: platform_browser_private_1.DomRootRenderer },
    /* @ts2dart_Provider */ { provide: core_private_1.AnimationDriver, useClass: core_private_1.NoOpAnimationDriver },
    platform_browser_1.EventManager,
    /* @ts2dart_Provider */ {
        provide: platform_browser_1.EVENT_MANAGER_PLUGINS,
        useClass: platform_browser_1.DomEventsPlugin,
        multi: true
    },
    /* @ts2dart_Provider */ { provide: compiler_1.XHR, useClass: compiler_1.XHR },
    /* @ts2dart_Provider */ { provide: core_1.APP_ID, useValue: 'a' },
    /* @ts2dart_Provider */ { provide: platform_browser_private_1.SharedStylesHost, useExisting: platform_browser_private_1.DomSharedStylesHost },
    platform_browser_private_1.DomSharedStylesHost, platform_browser_1.ELEMENT_PROBE_PROVIDERS,
    /* @ts2dart_Provider */ { provide: compiler_1.DirectiveResolver, useClass: testing_2.MockDirectiveResolver },
    /* @ts2dart_Provider */ { provide: compiler_1.ViewResolver, useClass: testing_2.MockViewResolver }, testing_4.Log,
    /* @ts2dart_Provider */ { provide: testing_2.TestComponentRenderer, useClass: platform_browser_dynamic_testing_private_1.DOMTestComponentRenderer },
    testing_2.TestComponentBuilder,
    /* @ts2dart_Provider */ { provide: core_1.NgZone, useFactory: createNgZone },
    /* @ts2dart_Provider */ { provide: common_1.LocationStrategy, useClass: testing_1.MockLocationStrategy }
];
//# sourceMappingURL=server.js.map