var common = require("./segmented-bar-common");
var types = require("utils/types");
var style = require("ui/styling/style");
global.moduleMerge(common, exports);
var color;
function ensureColor() {
    if (!color) {
        color = require("color");
    }
}
function onSelectedIndexPropertyChanged(data) {
    var view = data.object;
    if (!view.ios || !view.items) {
        return;
    }
    var index = data.newValue;
    if (types.isNumber(index)) {
        if (index >= 0 && index <= view.items.length - 1) {
            view.ios.selectedSegmentIndex = index;
        }
        else {
            view.selectedIndex = undefined;
            throw new Error("selectedIndex should be between [0, items.length - 1]");
        }
        var args = { eventName: SegmentedBar.selectedIndexChangedEvent, object: view, oldIndex: data.oldValue, newIndex: data.newValue };
        view.notify(args);
    }
}
common.SegmentedBar.selectedIndexProperty.metadata.onSetNativeValue = onSelectedIndexPropertyChanged;
function onItemsPropertyChanged(data) {
    var view = data.object;
    if (!view.ios) {
        return;
    }
    var oldItems = data.oldValue;
    if (oldItems && oldItems.length) {
        for (var i = 0; i < oldItems.length; i++) {
            oldItems[i]._parent = null;
        }
    }
    view._adjustSelectedIndex(newItems);
    view.ios.removeAllSegments();
    var newItems = data.newValue;
    if (newItems && newItems.length) {
        for (var i = 0; i < newItems.length; i++) {
            view.insertTab((newItems[i]), i);
        }
        if (view.ios.selectedSegmentIndex !== view.selectedIndex) {
            view.ios.selectedSegmentIndex = view.selectedIndex;
        }
    }
}
common.SegmentedBar.itemsProperty.metadata.onSetNativeValue = onItemsPropertyChanged;
function onSelectedBackgroundColorPropertyChanged(data) {
    var view = data.object;
    if (!view.ios) {
        return;
    }
    ensureColor();
    if (data.newValue instanceof color.Color) {
        view.ios.tintColor = data.newValue.ios;
    }
}
common.SegmentedBar.selectedBackgroundColorProperty.metadata.onSetNativeValue = onSelectedBackgroundColorPropertyChanged;
var SegmentedBarItem = (function (_super) {
    __extends(SegmentedBarItem, _super);
    function SegmentedBarItem() {
        _super.apply(this, arguments);
    }
    SegmentedBarItem.prototype._update = function () {
        if (this._parent) {
            var tabIndex = this._parent.items.indexOf(this);
            this._parent.ios.setTitleForSegmentAtIndex(this.title || "", tabIndex);
        }
    };
    return SegmentedBarItem;
}(common.SegmentedBarItem));
exports.SegmentedBarItem = SegmentedBarItem;
var SegmentedBar = (function (_super) {
    __extends(SegmentedBar, _super);
    function SegmentedBar() {
        _super.call(this);
        this._ios = UISegmentedControl.new();
        this._selectionHandler = SelectionHandlerImpl.initWithOwner(new WeakRef(this));
        this._ios.addTargetActionForControlEvents(this._selectionHandler, "selected", UIControlEvents.UIControlEventValueChanged);
    }
    Object.defineProperty(SegmentedBar.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    SegmentedBar.prototype.insertTab = function (tabItem, index) {
        _super.prototype.insertTab.call(this, tabItem, index);
        tabItem._parent = this;
        this.ios.insertSegmentWithTitleAtIndexAnimated(tabItem.title || "", this.getValidIndex(index), false);
    };
    return SegmentedBar;
}(common.SegmentedBar));
exports.SegmentedBar = SegmentedBar;
var SelectionHandlerImpl = (function (_super) {
    __extends(SelectionHandlerImpl, _super);
    function SelectionHandlerImpl() {
        _super.apply(this, arguments);
    }
    SelectionHandlerImpl.initWithOwner = function (owner) {
        var handler = SelectionHandlerImpl.new();
        handler._owner = owner;
        return handler;
    };
    SelectionHandlerImpl.prototype.selected = function (sender) {
        var owner = this._owner.get();
        if (owner) {
            owner.selectedIndex = sender.selectedSegmentIndex;
        }
    };
    SelectionHandlerImpl.ObjCExposedMethods = {
        "selected": { returns: interop.types.void, params: [UISegmentedControl] }
    };
    return SelectionHandlerImpl;
}(NSObject));
var SegmentedBarStyler = (function () {
    function SegmentedBarStyler() {
    }
    SegmentedBarStyler.setColorProperty = function (v, newValue) {
        var bar = v.ios;
        var currentAttrs = bar.titleTextAttributesForState(UIControlState.UIControlStateNormal);
        var attrs;
        if (currentAttrs) {
            attrs = currentAttrs.mutableCopy();
        }
        else {
            attrs = NSMutableDictionary.new();
        }
        attrs.setValueForKey(newValue, NSForegroundColorAttributeName);
        bar.setTitleTextAttributesForState(attrs, UIControlState.UIControlStateNormal);
    };
    SegmentedBarStyler.resetColorProperty = function (v, nativeValue) {
        var bar = v.ios;
        var currentAttrs = bar.titleTextAttributesForState(UIControlState.UIControlStateNormal);
        var attrs;
        if (currentAttrs) {
            attrs = currentAttrs.mutableCopy();
        }
        else {
            attrs = NSMutableDictionary.new();
        }
        attrs.setValueForKey(nativeValue, NSForegroundColorAttributeName);
        bar.setTitleTextAttributesForState(attrs, UIControlState.UIControlStateNormal);
    };
    SegmentedBarStyler.setFontInternalProperty = function (v, newValue) {
        var bar = v.ios;
        var currentAttrs = bar.titleTextAttributesForState(UIControlState.UIControlStateNormal);
        var attrs;
        if (currentAttrs) {
            attrs = currentAttrs.mutableCopy();
        }
        else {
            attrs = NSMutableDictionary.new();
        }
        var newFont = newValue.getUIFont(UIFont.systemFontOfSize(UIFont.labelFontSize()));
        attrs.setValueForKey(newFont, NSFontAttributeName);
        bar.setTitleTextAttributesForState(attrs, UIControlState.UIControlStateNormal);
    };
    SegmentedBarStyler.resetFontInternalProperty = function (v, nativeValue) {
        var bar = v.ios;
        var currentAttrs = bar.titleTextAttributesForState(UIControlState.UIControlStateNormal);
        var attrs;
        if (currentAttrs) {
            attrs = currentAttrs.mutableCopy();
        }
        else {
            attrs = NSMutableDictionary.new();
        }
        attrs.setValueForKey(nativeValue, NSFontAttributeName);
        bar.setTitleTextAttributesForState(attrs, UIControlState.UIControlStateNormal);
    };
    SegmentedBarStyler.getNativeFontValue = function (v) {
        var bar = v.ios;
        var currentAttrs = bar.titleTextAttributesForState(UIControlState.UIControlStateNormal);
        var currentFont;
        if (currentAttrs) {
            currentFont = currentAttrs.objectForKey(NSFontAttributeName);
        }
        if (!currentFont) {
            currentFont = UIFont.systemFontOfSize(UIFont.labelFontSize());
        }
        return currentFont;
    };
    SegmentedBarStyler.registerHandlers = function () {
        style.registerHandler(style.colorProperty, new style.StylePropertyChangedHandler(SegmentedBarStyler.setColorProperty, SegmentedBarStyler.resetColorProperty), "SegmentedBar");
        style.registerHandler(style.fontInternalProperty, new style.StylePropertyChangedHandler(SegmentedBarStyler.setFontInternalProperty, SegmentedBarStyler.resetFontInternalProperty, SegmentedBarStyler.getNativeFontValue), "SegmentedBar");
    };
    return SegmentedBarStyler;
}());
exports.SegmentedBarStyler = SegmentedBarStyler;
SegmentedBarStyler.registerHandlers();
