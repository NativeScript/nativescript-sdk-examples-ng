var defaultViewMeta = {
    skipAddToDom: false,
};
var elementMap = new Map();
var camelCaseSplit = /([a-z0-9])([A-Z])/g;
function registerElement(elementName, resolver, meta) {
    if (elementMap.has(elementName)) {
        throw new Error("Element for " + elementName + " already registered.");
    }
    else {
        var entry = { resolver: resolver, meta: meta };
        elementMap.set(elementName, entry);
        elementMap.set(elementName.toLowerCase(), entry);
        elementMap.set(elementName.replace(camelCaseSplit, "$1-$2").toLowerCase(), entry);
    }
}
exports.registerElement = registerElement;
function getViewClass(elementName) {
    var entry = elementMap.get(elementName) ||
        elementMap.get(elementName.toLowerCase());
    if (!entry) {
        throw new TypeError("No known component for element " + elementName + ".");
    }
    try {
        return entry.resolver();
    }
    catch (e) {
        throw new TypeError("Could not load view for: " + elementName + "." + e);
    }
}
exports.getViewClass = getViewClass;
function getViewMeta(nodeName) {
    var meta = defaultViewMeta;
    var entry = elementMap.get(nodeName) || elementMap.get(nodeName.toLowerCase());
    if (entry && entry.meta) {
        meta = entry.meta;
    }
    return meta;
}
exports.getViewMeta = getViewMeta;
function isKnownView(elementName) {
    return elementMap.has(elementName) ||
        elementMap.has(elementName.toLowerCase());
}
exports.isKnownView = isKnownView;
//Register default NativeScript components
//Note: ActionBar related components are registerd together with action-bar directives.
registerElement("AbsoluteLayout", function () { return require("ui/layouts/absolute-layout").AbsoluteLayout; });
registerElement("ActivityIndicator", function () { return require("ui/activity-indicator").ActivityIndicator; });
registerElement("Border", function () { return require("ui/border").Border; });
registerElement("Button", function () { return require("ui/button").Button; });
registerElement("ContentView", function () { return require("ui/content-view").ContentView; });
registerElement("DatePicker", function () { return require("ui/date-picker").DatePicker; });
registerElement("DockLayout", function () { return require("ui/layouts/dock-layout").DockLayout; });
registerElement("GridLayout", function () { return require("ui/layouts/grid-layout").GridLayout; });
registerElement("HtmlView", function () { return require("ui/html-view").HtmlView; });
registerElement("Image", function () { return require("ui/image").Image; });
// Parse5 changes <Image> tags to <img>. WTF!
registerElement("img", function () { return require("ui/image").Image; });
registerElement("Label", function () { return require("ui/label").Label; });
registerElement("ListPicker", function () { return require("ui/list-picker").ListPicker; });
registerElement("ListView", function () { return require("ui/list-view").ListView; });
registerElement("Page", function () { return require("ui/page").Page; });
registerElement("Placeholder", function () { return require("ui/placeholder").Placeholder; });
registerElement("Progress", function () { return require("ui/progress").Progress; });
registerElement("ProxyViewContainer", function () { return require("ui/proxy-view-container").ProxyViewContainer; });
registerElement("Repeater", function () { return require("ui/repeater").Repeater; });
registerElement("ScrollView", function () { return require("ui/scroll-view").ScrollView; });
registerElement("SearchBar", function () { return require("ui/search-bar").SearchBar; });
registerElement("SegmentedBar", function () { return require("ui/segmented-bar").SegmentedBar; });
registerElement("SegmentedBarItem", function () { return require("ui/segmented-bar").SegmentedBarItem; });
registerElement("Slider", function () { return require("ui/slider").Slider; });
registerElement("StackLayout", function () { return require("ui/layouts/stack-layout").StackLayout; });
registerElement("Switch", function () { return require("ui/switch").Switch; });
registerElement("TabView", function () { return require("ui/tab-view").TabView; });
registerElement("TextField", function () { return require("ui/text-field").TextField; });
registerElement("TextView", function () { return require("ui/text-view").TextView; });
registerElement("TimePicker", function () { return require("ui/time-picker").TimePicker; });
registerElement("WebView", function () { return require("ui/web-view").WebView; });
registerElement("WrapLayout", function () { return require("ui/layouts/wrap-layout").WrapLayout; });
registerElement("FormattedString", function () { return require("text/formatted-string").FormattedString; });
registerElement("Span", function () { return require("text/span").Span; });
registerElement("DetachedContainer", function () { return require("ui/proxy-view-container").ProxyViewContainer; }, { skipAddToDom: true });
//# sourceMappingURL=element-registry.js.map