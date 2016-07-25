var types_1 = require("utils/types");
var view_1 = require("ui/core/view");
var placeholder_1 = require("ui/placeholder");
var content_view_1 = require('ui/content-view');
var layout_base_1 = require('ui/layouts/layout-base');
var element_registry_1 = require('./element-registry');
var special_properties_1 = require("ui/builder/special-properties");
var style_property_1 = require("ui/styling/style-property");
var dependency_observable_1 = require("ui/core/dependency-observable");
var platform_1 = require("platform");
var trace_1 = require("./trace");
var IOS_PREFX = "@ios:";
var ANDROID_PREFX = "@android:";
var whiteSpaceSplitter = /\s+/;
function isView(view) {
    return view instanceof view_1.View;
}
exports.isView = isView;
function isLayout(view) {
    return view instanceof layout_base_1.LayoutBase;
}
exports.isLayout = isLayout;
function isContentView(view) {
    return view instanceof content_view_1.ContentView;
}
exports.isContentView = isContentView;
var propertyMaps = new Map();
var ViewUtil = (function () {
    function ViewUtil(device) {
        this.isIos = device.os === platform_1.platformNames.ios;
        this.isAndroid = device.os === platform_1.platformNames.android;
    }
    ViewUtil.prototype.insertChild = function (parent, child, atIndex) {
        if (atIndex === void 0) { atIndex = -1; }
        if (!parent || child.meta.skipAddToDom) {
            return;
        }
        if (parent.meta && parent.meta.insertChild) {
            parent.meta.insertChild(parent, child, atIndex);
        }
        else if (isLayout(parent)) {
            if (atIndex !== -1) {
                parent.insertChild(child, atIndex);
            }
            else {
                parent.addChild(child);
            }
        }
        else if (isContentView(parent)) {
            parent.content = child;
        }
        else if (parent && parent._addChildFromBuilder) {
            parent._addChildFromBuilder(child.nodeName, child);
        }
        else {
        }
    };
    ViewUtil.prototype.removeChild = function (parent, child) {
        if (!parent || child.meta.skipAddToDom) {
            return;
        }
        if (parent.meta && parent.meta.removeChild) {
            parent.meta.removeChild(parent, child);
        }
        else if (isLayout(parent)) {
            parent.removeChild(child);
        }
        else if (isContentView(parent)) {
            if (parent.content === child) {
                parent.content = null;
            }
        }
        else if (isView(parent)) {
            parent._removeView(child);
        }
        else {
        }
    };
    ViewUtil.prototype.getChildIndex = function (parent, child) {
        if (isLayout(parent)) {
            return parent.getChildIndex(child);
        }
        else if (isContentView(parent)) {
            return child === parent.content ? 0 : -1;
        }
        else {
        }
    };
    ViewUtil.prototype.createAndAttach = function (name, viewClass, parent, beforeAttach) {
        var view = new viewClass();
        view.nodeName = name;
        view.meta = element_registry_1.getViewMeta(name);
        if (beforeAttach) {
            beforeAttach(view);
        }
        if (parent) {
            this.insertChild(parent, view);
        }
        return view;
    };
    ViewUtil.prototype.createView = function (name, parent, beforeAttach) {
        if (element_registry_1.isKnownView(name)) {
            var viewClass = element_registry_1.getViewClass(name);
            return this.createAndAttach(name, viewClass, parent, beforeAttach);
        }
        else {
            return this.createViewContainer(name, parent, beforeAttach);
        }
    };
    ViewUtil.prototype.createText = function (value) {
        var text = new placeholder_1.Placeholder();
        text.nodeName = "#text";
        text.visibility = "collapse";
        text.meta = element_registry_1.getViewMeta("Placeholder");
        return text;
    };
    ViewUtil.prototype.createViewContainer = function (name, parentElement, beforeAttach) {
        trace_1.rendererLog('Creating view container in:' + parentElement);
        var layout = this.createView('ProxyViewContainer', parentElement, beforeAttach);
        layout.nodeName = 'ProxyViewContainer';
        return layout;
    };
    ViewUtil.prototype.createTemplateAnchor = function (parentElement) {
        //HACK: Using a ContentView here, so that it creates a native View object
        var anchor = this.createAndAttach('template', content_view_1.ContentView, parentElement);
        anchor.visibility = "collapse";
        anchor.templateParent = parentElement;
        return anchor;
    };
    ViewUtil.prototype.isXMLAttribute = function (name) {
        switch (name) {
            case "style": return true;
            case "rows": return true;
            case "columns": return true;
            case "fontAttributes": return true;
            default: return false;
        }
    };
    ViewUtil.prototype.platformFilter = function (attribute) {
        var lowered = attribute.toLowerCase();
        if (lowered.indexOf(IOS_PREFX) === 0) {
            if (this.isIos) {
                return attribute.substr(IOS_PREFX.length);
            }
            else {
                return null;
            }
        }
        if (lowered.indexOf(ANDROID_PREFX) === 0) {
            if (this.isAndroid) {
                return attribute.substr(ANDROID_PREFX.length);
            }
            else {
                return null;
            }
        }
        return attribute;
    };
    ViewUtil.prototype.setProperty = function (view, attributeName, value) {
        attributeName = this.platformFilter(attributeName);
        if (!attributeName) {
            return;
        }
        if (attributeName.indexOf(".") !== -1) {
            // Handle nested properties
            var properties = attributeName.split(".");
            attributeName = properties[properties.length - 1];
            var propMap = this.getProperties(view);
            var i = 0;
            while (i < properties.length - 1 && types_1.isDefined(view)) {
                var prop = properties[i];
                if (propMap.has(prop)) {
                    prop = propMap.get(prop);
                }
                view = view[prop];
                propMap = this.getProperties(view);
                i++;
            }
        }
        if (types_1.isDefined(view)) {
            this.setPropertyInternal(view, attributeName, value);
        }
    };
    ViewUtil.prototype.setPropertyInternal = function (view, attributeName, value) {
        trace_1.rendererLog('Setting attribute: ' + attributeName);
        var specialSetter = special_properties_1.getSpecialPropertySetter(attributeName);
        var propMap = this.getProperties(view);
        if (attributeName === "class") {
            this.setClasses(view, value);
        }
        else if (this.isXMLAttribute(attributeName)) {
            view._applyXmlAttribute(attributeName, value);
        }
        else if (specialSetter) {
            specialSetter(view, value);
        }
        else if (propMap.has(attributeName)) {
            // We have a lower-upper case mapped property.
            var propertyName = propMap.get(attributeName);
            view[propertyName] = this.convertValue(value);
        }
        else {
            // Unknown attribute value -- just set it to our object as is.
            view[attributeName] = this.convertValue(value);
        }
    };
    ViewUtil.prototype.convertValue = function (value) {
        if (typeof (value) !== "string" || value === "") {
            return value;
        }
        var valueAsNumber = +value;
        if (!isNaN(valueAsNumber)) {
            return valueAsNumber;
        }
        else if (value && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) {
            return value.toLowerCase() === "true" ? true : false;
        }
        else {
            return value;
        }
    };
    ViewUtil.prototype.getProperties = function (instance) {
        var type = instance && instance.constructor;
        if (!type) {
            return new Map();
        }
        if (!propertyMaps.has(type)) {
            var propMap = new Map();
            for (var propName in instance) {
                propMap.set(propName.toLowerCase(), propName);
            }
            propertyMaps.set(type, propMap);
        }
        return propertyMaps.get(type);
    };
    ViewUtil.prototype.cssClasses = function (view) {
        if (!view.cssClasses) {
            view.cssClasses = new Map();
        }
        return view.cssClasses;
    };
    ViewUtil.prototype.addClass = function (view, className) {
        this.cssClasses(view).set(className, true);
        this.syncClasses(view);
    };
    ViewUtil.prototype.removeClass = function (view, className) {
        this.cssClasses(view).delete(className);
        this.syncClasses(view);
    };
    ViewUtil.prototype.setClasses = function (view, classesValue) {
        var _this = this;
        var classes = classesValue.split(whiteSpaceSplitter);
        this.cssClasses(view).clear();
        classes.forEach(function (className) { return _this.cssClasses(view).set(className, true); });
        this.syncClasses(view);
    };
    ViewUtil.prototype.syncClasses = function (view) {
        var classValue = Array.from(this.cssClasses(view).keys()).join(' ');
        view.cssClass = classValue;
    };
    ViewUtil.prototype.resolveCssValue = function (styleValue) {
        return styleValue;
    };
    ViewUtil.prototype.setStyleValue = function (view, property, value) {
        try {
            view.style._setValue(property, value, dependency_observable_1.ValueSource.Local);
        }
        catch (ex) {
            trace_1.styleError("Error setting property: " + property.name + " view: " + view + " value: " + value + " " + ex);
        }
    };
    ViewUtil.prototype.setStyleProperty = function (view, styleName, styleValue) {
        var _this = this;
        trace_1.rendererLog("setStyleProperty: " + styleName + " = " + styleValue);
        var name = styleName;
        var resolvedValue = this.resolveCssValue(styleValue);
        style_property_1.withStyleProperty(name, resolvedValue, function (property, value) {
            if (types_1.isString(property)) {
                //Fall back to resolving property by name.
                var propertyName = property;
                var resolvedProperty = style_property_1.getPropertyByName(name);
                if (resolvedProperty) {
                    _this.setStyleValue(view, resolvedProperty, resolvedValue);
                }
                else {
                    trace_1.rendererLog("Unknown style property: " + styleName);
                }
            }
            else {
                var resolvedProperty = property;
                _this.setStyleValue(view, resolvedProperty, resolvedValue);
            }
        });
    };
    return ViewUtil;
}());
exports.ViewUtil = ViewUtil;
//# sourceMappingURL=view-util.js.map