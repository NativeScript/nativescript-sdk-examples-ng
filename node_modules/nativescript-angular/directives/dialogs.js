var core_1 = require('@angular/core');
var page_1 = require('ui/page');
var detached_loader_1 = require('../common/detached-loader');
var ModalDialogParams = (function () {
    function ModalDialogParams(context, closeCallback) {
        if (context === void 0) { context = {}; }
        this.context = context;
        this.closeCallback = closeCallback;
    }
    return ModalDialogParams;
}());
exports.ModalDialogParams = ModalDialogParams;
var ModalDialogService = (function () {
    function ModalDialogService(page, compiler) {
        this.page = page;
        this.compiler = compiler;
    }
    ModalDialogService.prototype.registerViewContainerRef = function (ref) {
        this.containerRef = ref;
    };
    ModalDialogService.prototype.showModal = function (type, options) {
        var _this = this;
        if (!this.containerRef) {
            throw new Error("No viewContainerRef: Make sure you have the modal-dialog-host directive inside your component.");
        }
        return new Promise(function (resove, reject) {
            var page = new page_1.Page();
            var detachedLoaderRef;
            var closeCallback = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                resove.apply(undefined, args);
                page.closeModal();
                detachedLoaderRef.destroy();
            };
            var modalParams = new ModalDialogParams(options.context, closeCallback);
            var providers = core_1.ReflectiveInjector.resolve([
                core_1.provide(page_1.Page, { useValue: page }),
                core_1.provide(ModalDialogParams, { useValue: modalParams }),
            ]);
            _this.compiler.resolveComponent(detached_loader_1.DetachedLoader).then(function (detachedFactory) {
                var childInjector = core_1.ReflectiveInjector.fromResolvedProviders(providers, _this.containerRef.parentInjector);
                detachedLoaderRef = _this.containerRef.createComponent(detachedFactory, -1, childInjector, null);
                detachedLoaderRef.instance.loadComponent(type).then(function (compRef) {
                    var componentView = compRef.location.nativeElement;
                    if (componentView.parent) {
                        componentView.parent.removeChild(componentView);
                    }
                    page.content = componentView;
                    _this.page.showModal(page, options.context, closeCallback, options.fullscreen);
                });
            });
        });
    };
    ModalDialogService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [page_1.Page, core_1.ComponentResolver])
    ], ModalDialogService);
    return ModalDialogService;
}());
exports.ModalDialogService = ModalDialogService;
var ModalDialogHost = (function () {
    function ModalDialogHost(containerRef, modalService) {
        modalService.registerViewContainerRef(containerRef);
    }
    ModalDialogHost = __decorate([
        core_1.Directive({
            selector: "[modal-dialog-host]"
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, ModalDialogService])
    ], ModalDialogHost);
    return ModalDialogHost;
}());
exports.ModalDialogHost = ModalDialogHost;
//# sourceMappingURL=dialogs.js.map