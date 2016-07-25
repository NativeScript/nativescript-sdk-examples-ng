require('globals');
require("zone.js/dist/zone-node");
require('reflect-metadata');
require('./polyfills/array');
require('./polyfills/console');
var trace_1 = require("./trace");
var security_1 = require('@angular/core/src/security');
var lang_1 = require('@angular/core/src/facade/lang');
var core_1 = require('@angular/core');
var di_1 = require('@angular/core/src/di');
var api_1 = require('@angular/core/src/render/api');
var renderer_1 = require('./renderer');
var dom_adapter_1 = require('./dom-adapter');
var compiler_1 = require('@angular/compiler');
var http_1 = require('@angular/http');
var xhr_1 = require('./http/xhr');
var ns_http_1 = require('./http/ns-http');
var ns_file_system_1 = require('./file-system/ns-file-system');
var exception_handler_1 = require('@angular/core/src/facade/exception_handler');
var application_common_providers_1 = require('@angular/core/src/application_common_providers');
var platform_common_providers_1 = require('@angular/core/src/platform_common_providers');
var common_1 = require("@angular/common");
var directives_1 = require('./directives');
var page_1 = require('ui/page');
var text_view_1 = require('ui/text-view');
var application = require('application');
var frame_1 = require("ui/frame");
var platform_providers_1 = require("./platform-providers");
var nativescriptIntl = require("nativescript-intl");
global.Intl = nativescriptIntl;
var ConsoleLogger = (function () {
    function ConsoleLogger() {
        this.log = lang_1.print;
        this.logError = lang_1.print;
        this.logGroup = lang_1.print;
    }
    ConsoleLogger.prototype.logGroupEnd = function () { };
    return ConsoleLogger;
}());
var bootstrapCache;
var lastBootstrappedApp;
exports.onBeforeLivesync = new core_1.EventEmitter();
exports.onAfterLivesync = new core_1.EventEmitter();
// See: https://github.com/angular/angular/commit/1745366530266d298306b995ecd23dabd8569e28
exports.NS_COMPILER_PROVIDERS = [
    compiler_1.COMPILER_PROVIDERS,
    di_1.provide(compiler_1.CompilerConfig, {
        useFactory: function (platformDirectives, platformPipes) {
            return new compiler_1.CompilerConfig({ platformDirectives: platformDirectives, platformPipes: platformPipes });
        },
        deps: [core_1.PLATFORM_DIRECTIVES, core_1.PLATFORM_PIPES]
    }),
    di_1.provide(compiler_1.XHR, { useClass: xhr_1.FileSystemXHR }),
    di_1.provide(core_1.PLATFORM_PIPES, { useValue: common_1.COMMON_PIPES, multi: true }),
    di_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: common_1.COMMON_DIRECTIVES, multi: true }),
    di_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: directives_1.NS_DIRECTIVES, multi: true })
];
function bootstrap(appComponentType, customProviders) {
    if (customProviders === void 0) { customProviders = null; }
    dom_adapter_1.NativeScriptDomAdapter.makeCurrent();
    var platformProviders = [
        platform_common_providers_1.PLATFORM_COMMON_PROVIDERS,
    ];
    var defaultAppProviders = [
        application_common_providers_1.APPLICATION_COMMON_PROVIDERS,
        common_1.FORM_PROVIDERS,
        di_1.provide(exception_handler_1.ExceptionHandler, {
            useFactory: function () {
                return new exception_handler_1.ExceptionHandler(new ConsoleLogger(), true);
            }, deps: []
        }),
        platform_providers_1.defaultPageProvider,
        platform_providers_1.defaultDeviceProvider,
        renderer_1.NativeScriptRootRenderer,
        di_1.provide(api_1.RootRenderer, { useClass: renderer_1.NativeScriptRootRenderer }),
        renderer_1.NativeScriptRenderer,
        di_1.provide(api_1.Renderer, { useClass: renderer_1.NativeScriptRenderer }),
        di_1.provide(security_1.SanitizationService, { useClass: dom_adapter_1.NativeScriptSanitizationService }),
        di_1.provide(compiler_1.ElementSchemaRegistry, { useClass: dom_adapter_1.NativeScriptElementSchemaRegistry }),
        exports.NS_COMPILER_PROVIDERS,
        di_1.provide(compiler_1.ElementSchemaRegistry, { useClass: dom_adapter_1.NativeScriptElementSchemaRegistry }),
        di_1.provide(compiler_1.XHR, { useClass: xhr_1.FileSystemXHR })
    ];
    var appProviders = [defaultAppProviders];
    if (lang_1.isPresent(customProviders)) {
        appProviders.push(customProviders);
    }
    // Http Setup    
    // Since HTTP_PROVIDERS can be added with customProviders above, this must come after
    appProviders.push([
        di_1.provide(http_1.XSRFStrategy, { useValue: new ns_http_1.NSXSRFStrategy() }),
        ns_file_system_1.NSFileSystem,
        di_1.provide(http_1.Http, {
            useFactory: function (backend, options, nsFileSystem) {
                return new ns_http_1.NSHttp(backend, options, nsFileSystem);
            }, deps: [http_1.XHRBackend, http_1.RequestOptions, ns_file_system_1.NSFileSystem]
        })
    ]);
    var platform = core_1.getPlatform();
    if (!lang_1.isPresent(platform)) {
        platform = core_1.createPlatform(core_1.ReflectiveInjector.resolveAndCreate(platformProviders));
    }
    // reflector.reflectionCapabilities = new ReflectionCapabilities();
    var appInjector = core_1.ReflectiveInjector.resolveAndCreate(appProviders, platform.injector);
    return core_1.coreLoadAndBootstrap(appComponentType, appInjector);
}
exports.bootstrap = bootstrap;
function createNavigationEntry(params, resolve, reject, isReboot) {
    var navEntry = {
        create: function () {
            var page = new page_1.Page();
            if (params.appOptions) {
                page.actionBarHidden = params.appOptions.startPageActionBarHidden;
            }
            var onLoadedHandler = function (args) {
                page.off('loaded', onLoadedHandler);
                //profiling.stop('application-start');
                trace_1.rendererLog('Page loaded');
                //profiling.start('ng-bootstrap');
                trace_1.rendererLog('BOOTSTRAPPING...');
                bootstrap(params.appComponentType, params.customProviders).then(function (compRef) {
                    //profiling.stop('ng-bootstrap');
                    trace_1.rendererLog('ANGULAR BOOTSTRAP DONE.');
                    lastBootstrappedApp = new WeakRef(compRef);
                    resolve(compRef);
                }, function (err) {
                    trace_1.rendererError('ERROR BOOTSTRAPPING ANGULAR');
                    var errorMessage = err.message + "\n\n" + err.stack;
                    trace_1.rendererError(errorMessage);
                    var view = new text_view_1.TextView();
                    view.text = errorMessage;
                    page.content = view;
                    reject(err);
                });
            };
            page.on('loaded', onLoadedHandler);
            return page;
        }
    };
    if (isReboot) {
        navEntry.animated = false;
        navEntry.clearHistory = true;
    }
    return navEntry;
}
function nativeScriptBootstrap(appComponentType, customProviders, appOptions) {
    bootstrapCache = { appComponentType: appComponentType, customProviders: customProviders, appOptions: appOptions };
    if (appOptions && appOptions.cssFile) {
        application.cssFile = appOptions.cssFile;
    }
    return new Promise(function (resolve, reject) {
        var navEntry = createNavigationEntry(bootstrapCache, resolve, reject, false);
        application.start(navEntry);
    });
}
exports.nativeScriptBootstrap = nativeScriptBootstrap;
// Patch livesync
var _baseLiveSync = global.__onLiveSync;
global.__onLiveSync = function () {
    trace_1.rendererLog("LiveSync Started");
    if (bootstrapCache) {
        exports.onBeforeLivesync.next(lastBootstrappedApp ? lastBootstrappedApp.get() : null);
        var frame = frame_1.topmost();
        var newEntry = createNavigationEntry(bootstrapCache, function (compRef) { return exports.onAfterLivesync.next(compRef); }, function (error) { return exports.onAfterLivesync.error(error); }, true);
        if (frame) {
            if (frame.currentPage && frame.currentPage.modal) {
                frame.currentPage.modal.closeModal();
            }
            frame.navigate(newEntry);
        }
    }
    else {
        _baseLiveSync();
    }
};
//# sourceMappingURL=application.js.map