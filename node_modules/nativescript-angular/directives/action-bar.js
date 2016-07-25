var core_1 = require('@angular/core');
var action_bar_1 = require("ui/action-bar");
var lang_1 = require("@angular/core/src/facade/lang");
var page_1 = require("ui/page");
var view_1 = require('ui/core/view');
var element_registry_1 = require('../element-registry');
var actionBarMeta = {
    skipAddToDom: true,
    insertChild: function (parent, child, atIndex) {
        var bar = parent;
        var childView = child;
        if (child instanceof action_bar_1.NavigationButton) {
            bar.navigationButton = childView;
            childView.parent = bar;
        }
        else if (child instanceof action_bar_1.ActionItem) {
            bar.actionItems.addItem(childView);
            childView.parent = bar;
        }
        else if (child.nodeName === "template") {
            child.templateParent = parent;
        }
        else if (child.nodeName !== "#text" && child instanceof view_1.View) {
            bar.titleView = childView;
        }
    },
    removeChild: function (parent, child) {
        var bar = parent;
        var childView = child;
        if (child instanceof action_bar_1.NavigationButton) {
            if (bar.navigationButton === childView) {
                bar.navigationButton = null;
            }
            childView.parent = null;
        }
        else if (child instanceof action_bar_1.ActionItem) {
            bar.actionItems.removeItem(childView);
            childView.parent = null;
        }
        else if (child.nodeName !== "template" && child instanceof view_1.View && bar.titleView && bar.titleView === childView) {
            bar.titleView = null;
        }
    },
};
element_registry_1.registerElement("ActionBar", function () { return require("ui/action-bar").ActionBar; }, actionBarMeta);
element_registry_1.registerElement("ActionItem", function () { return require("ui/action-bar").ActionItem; });
element_registry_1.registerElement("NavigationButton", function () { return require("ui/action-bar").NavigationButton; });
var ActionBarComponent = (function () {
    function ActionBarComponent(element, page) {
        this.element = element;
        this.page = page;
        if (lang_1.isBlank(this.page.actionBarHidden)) {
            this.page.actionBarHidden = false;
        }
        this.page.actionBar = this.element.nativeElement;
        this.page.actionBar.update();
    }
    ActionBarComponent = __decorate([
        core_1.Component({
            selector: "ActionBar",
            template: "<ng-content></ng-content>"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, page_1.Page])
    ], ActionBarComponent);
    return ActionBarComponent;
}());
exports.ActionBarComponent = ActionBarComponent;
var ActionBarScope = (function () {
    function ActionBarScope(page) {
        this.page = page;
    }
    ActionBarScope.prototype.onNavButtonInit = function (navBtn) {
        this.page.actionBar.navigationButton = navBtn.element.nativeElement;
    };
    ActionBarScope.prototype.onNavButtonDestroy = function (navBtn) {
        var nav = navBtn.element.nativeElement;
        if (nav && this.page.actionBar.navigationButton === nav) {
            this.page.actionBar.navigationButton = null;
        }
    };
    ActionBarScope.prototype.onActionInit = function (item) {
        this.page.actionBar.actionItems.addItem(item.element.nativeElement);
    };
    ActionBarScope.prototype.onActionDestroy = function (item) {
        this.page.actionBar.actionItems.removeItem(item.element.nativeElement);
    };
    ActionBarScope = __decorate([
        core_1.Component({
            selector: "ActionBarExtension",
            template: ""
        }), 
        __metadata('design:paramtypes', [page_1.Page])
    ], ActionBarScope);
    return ActionBarScope;
}());
exports.ActionBarScope = ActionBarScope;
var ActionItemDirective = (function () {
    function ActionItemDirective(element, ownerScope) {
        this.element = element;
        this.ownerScope = ownerScope;
        if (this.ownerScope) {
            this.ownerScope.onActionInit(this);
        }
    }
    ActionItemDirective.prototype.ngOnDestroy = function () {
        if (this.ownerScope) {
            this.ownerScope.onActionDestroy(this);
        }
    };
    ActionItemDirective = __decorate([
        core_1.Directive({
            selector: "ActionItem"
        }),
        __param(1, core_1.Optional()), 
        __metadata('design:paramtypes', [core_1.ElementRef, ActionBarScope])
    ], ActionItemDirective);
    return ActionItemDirective;
}());
exports.ActionItemDirective = ActionItemDirective;
var NavigationButtonDirective = (function () {
    function NavigationButtonDirective(element, ownerScope) {
        this.element = element;
        this.ownerScope = ownerScope;
        if (this.ownerScope) {
            this.ownerScope.onNavButtonInit(this);
        }
    }
    NavigationButtonDirective.prototype.ngOnDestroy = function () {
        if (this.ownerScope) {
            this.ownerScope.onNavButtonDestroy(this);
        }
    };
    NavigationButtonDirective = __decorate([
        core_1.Directive({
            selector: "NavigationButton"
        }),
        __param(1, core_1.Optional()), 
        __metadata('design:paramtypes', [core_1.ElementRef, ActionBarScope])
    ], NavigationButtonDirective);
    return NavigationButtonDirective;
}());
exports.NavigationButtonDirective = NavigationButtonDirective;
//# sourceMappingURL=action-bar.js.map