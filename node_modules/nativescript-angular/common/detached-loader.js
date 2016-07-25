var core_1 = require('@angular/core');
var trace = require("trace");
exports.CATEGORY = "detached-loader";
function log(message) {
    trace.write(message, exports.CATEGORY);
}
/**
 * Wrapper component used for loading components when navigating
 * It uses DetachedContainer as selector so that it is containerRef is not attached to the visual tree.
 */
var DetachedLoader = (function () {
    function DetachedLoader(compiler, changeDetector, containerRef) {
        this.compiler = compiler;
        this.changeDetector = changeDetector;
        this.containerRef = containerRef;
        this.viewLoaded = false;
        this.pendingLoads = [];
    }
    DetachedLoader.prototype.ngAfterViewInit = function () {
        var _this = this;
        log("DetachedLoader.ngAfterViewInit");
        this.viewLoaded = true;
        this.pendingLoads.forEach(function (loadEntry) {
            _this.loadInLocation(loadEntry.componentType).then(function (loadedRef) {
                loadEntry.resolveCallback(loadedRef);
            });
        });
    };
    DetachedLoader.prototype.loadInLocation = function (componentType) {
        var _this = this;
        return this.compiler.resolveComponent(componentType).then(function (componentFactory) {
            return _this.childContainerRef.createComponent(componentFactory, _this.childContainerRef.length, _this.childContainerRef.parentInjector, null);
        }).then(function (compRef) {
            log("DetachedLoader.loadInLocation component loaded -> markForCheck");
            // Component is created, buit may not be checked if we are loading 
            // inside component with OnPush CD strategy. Mark us for check to be sure CD will reach us.
            // We are inside a promise here so no need for setTimeout - CD should trigger after the promise.
            _this.changeDetector.markForCheck();
            return compRef;
        });
    };
    DetachedLoader.prototype.loadComponent = function (componentType) {
        var _this = this;
        log("DetachedLoader.loadComponent viewLoaded: " + this.viewLoaded);
        // Check if called before placeholder is initialized.
        // Delay load if so.
        if (this.viewLoaded) {
            return this.loadInLocation(componentType);
        }
        else {
            // loadComponent called, but detached-loader is still not initialized.
            // Mark it for change and trigger change detection to be sure it will be initialized,
            // so that loading can conitionue.
            log("DetachedLoader.loadComponent -> markForCheck(with setTimeout())");
            setTimeout(function () { return _this.changeDetector.markForCheck(); }, 0);
            return new Promise(function (resolve, reject) {
                _this.pendingLoads.push({
                    componentType: componentType,
                    resolveCallback: resolve
                });
            });
        }
    };
    DetachedLoader.prototype.loadWithFactory = function (factory) {
        return this.containerRef.createComponent(factory, this.containerRef.length, this.containerRef.parentInjector, null);
    };
    __decorate([
        core_1.ViewChild('loader', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], DetachedLoader.prototype, "childContainerRef", void 0);
    DetachedLoader = __decorate([
        core_1.Component({
            selector: 'DetachedContainer',
            template: "<Placeholder #loader></Placeholder>"
        }), 
        __metadata('design:paramtypes', [core_1.ComponentResolver, core_1.ChangeDetectorRef, core_1.ViewContainerRef])
    ], DetachedLoader);
    return DetachedLoader;
}());
exports.DetachedLoader = DetachedLoader;
//# sourceMappingURL=detached-loader.js.map