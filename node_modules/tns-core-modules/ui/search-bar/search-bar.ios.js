var common = require("./search-bar-common");
var style = require("ui/styling/style");
var color_1 = require("color");
var types;
function ensureTypes() {
    if (!types) {
        types = require("utils/types");
    }
}
function onTextPropertyChanged(data) {
    var bar = data.object;
    bar.ios.text = data.newValue;
}
common.SearchBar.textProperty.metadata.onSetNativeValue = onTextPropertyChanged;
function onTextFieldBackgroundColorPropertyChanged(data) {
    if (data.newValue instanceof color_1.Color) {
        var bar = data.object;
        if (bar._textField) {
            bar._textField.backgroundColor = data.newValue.ios;
        }
    }
}
common.SearchBar.textFieldBackgroundColorProperty.metadata.onSetNativeValue = onTextFieldBackgroundColorPropertyChanged;
function onTextFieldHintColorPropertyChanged(data) {
    if (data.newValue instanceof color_1.Color) {
        var bar = data.object;
        if (bar._placeholderLabel) {
            bar._placeholderLabel.textColor = data.newValue.ios;
        }
    }
}
common.SearchBar.textFieldHintColorProperty.metadata.onSetNativeValue = onTextFieldHintColorPropertyChanged;
function onHintPropertyChanged(data) {
    var bar = data.object;
    if (!bar.ios) {
        return;
    }
    var newValue = data.newValue;
    ensureTypes();
    if (types.isString(newValue)) {
        bar.ios.placeholder = newValue;
    }
}
common.SearchBar.hintProperty.metadata.onSetNativeValue = onHintPropertyChanged;
global.moduleMerge(common, exports);
var UISearchBarDelegateImpl = (function (_super) {
    __extends(UISearchBarDelegateImpl, _super);
    function UISearchBarDelegateImpl() {
        _super.apply(this, arguments);
    }
    UISearchBarDelegateImpl.initWithOwner = function (owner) {
        var delegate = UISearchBarDelegateImpl.new();
        delegate._owner = owner;
        return delegate;
    };
    UISearchBarDelegateImpl.prototype.searchBarTextDidChange = function (searchBar, searchText) {
        var owner = this._owner.get();
        if (!owner) {
            return;
        }
        owner._onPropertyChangedFromNative(common.SearchBar.textProperty, searchText);
        if (searchText === "") {
            owner._emit(common.SearchBar.clearEvent);
        }
    };
    UISearchBarDelegateImpl.prototype.searchBarCancelButtonClicked = function (searchBar) {
        searchBar.resignFirstResponder();
        var owner = this._owner.get();
        if (!owner) {
            return;
        }
        owner._emit(common.SearchBar.clearEvent);
    };
    UISearchBarDelegateImpl.prototype.searchBarSearchButtonClicked = function (searchBar) {
        searchBar.resignFirstResponder();
        var owner = this._owner.get();
        if (!owner) {
            return;
        }
        owner._emit(common.SearchBar.submitEvent);
    };
    UISearchBarDelegateImpl.ObjCProtocols = [UISearchBarDelegate];
    return UISearchBarDelegateImpl;
}(NSObject));
var SearchBar = (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar() {
        _super.call(this);
        this._ios = new UISearchBar();
        this._delegate = UISearchBarDelegateImpl.initWithOwner(new WeakRef(this));
    }
    SearchBar.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this._ios.delegate = this._delegate;
    };
    SearchBar.prototype.onUnloaded = function () {
        this._ios.delegate = null;
        _super.prototype.onUnloaded.call(this);
    };
    SearchBar.prototype.dismissSoftInput = function () {
        this.ios.resignFirstResponder();
    };
    Object.defineProperty(SearchBar.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchBar.prototype, "_textField", {
        get: function () {
            if (!this.__textField) {
                this.__textField = this.ios.valueForKey("searchField");
            }
            return this.__textField;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchBar.prototype, "_placeholderLabel", {
        get: function () {
            if (!this.__placeholderLabel) {
                if (this._textField) {
                    this.__placeholderLabel = this._textField.valueForKey("placeholderLabel");
                }
            }
            return this.__placeholderLabel;
        },
        enumerable: true,
        configurable: true
    });
    return SearchBar;
}(common.SearchBar));
exports.SearchBar = SearchBar;
var SearchBarStyler = (function () {
    function SearchBarStyler() {
    }
    SearchBarStyler.setBackgroundColorProperty = function (v, newValue) {
        var bar = v.ios;
        bar.barTintColor = newValue;
    };
    SearchBarStyler.getBackgroundColorProperty = function (v) {
        var bar = v.ios;
        return bar.barTintColor;
    };
    SearchBarStyler.resetBackgroundColorProperty = function (v, nativeValue) {
        var bar = v.ios;
        bar.barTintColor = nativeValue;
    };
    SearchBarStyler.getColorProperty = function (v) {
        var sf = v._textField;
        if (sf) {
            return sf.textColor;
        }
        return undefined;
    };
    SearchBarStyler.setColorProperty = function (v, newValue) {
        var sf = v._textField;
        if (sf) {
            sf.textColor = newValue;
            sf.tintColor = newValue;
        }
    };
    SearchBarStyler.resetColorProperty = function (v, nativeValue) {
        var sf = v._textField;
        if (sf) {
            sf.textColor = nativeValue;
            sf.tintColor = nativeValue;
        }
    };
    SearchBarStyler.setFontInternalProperty = function (v, newValue, nativeValue) {
        var sf = v._textField;
        if (sf) {
            sf.font = newValue.getUIFont(nativeValue);
        }
    };
    SearchBarStyler.resetFontInternalProperty = function (v, nativeValue) {
        var sf = v._textField;
        if (sf) {
            sf.font = nativeValue;
        }
    };
    SearchBarStyler.getNativeFontInternalValue = function (v) {
        var sf = v._textField;
        if (sf) {
            return sf.font;
        }
        return undefined;
    };
    SearchBarStyler.registerHandlers = function () {
        style.registerHandler(style.backgroundColorProperty, new style.StylePropertyChangedHandler(SearchBarStyler.setBackgroundColorProperty, SearchBarStyler.resetBackgroundColorProperty, SearchBarStyler.getBackgroundColorProperty), "SearchBar");
        style.registerHandler(style.colorProperty, new style.StylePropertyChangedHandler(SearchBarStyler.setColorProperty, SearchBarStyler.resetColorProperty, SearchBarStyler.getColorProperty), "SearchBar");
        style.registerHandler(style.fontInternalProperty, new style.StylePropertyChangedHandler(SearchBarStyler.setFontInternalProperty, SearchBarStyler.resetFontInternalProperty, SearchBarStyler.getNativeFontInternalValue), "SearchBar");
    };
    return SearchBarStyler;
}());
exports.SearchBarStyler = SearchBarStyler;
SearchBarStyler.registerHandlers();
