var utils = require("utils/utils");
var style = require("ui/styling/style");
var enums = require("ui/enums");
var TextBaseStyler = (function () {
    function TextBaseStyler() {
    }
    TextBaseStyler.setFontInternalProperty = function (view, newValue, nativeValue) {
        var ios = view._nativeView;
        ios.font = newValue.getUIFont(nativeValue);
    };
    TextBaseStyler.resetFontInternalProperty = function (view, nativeValue) {
        var ios = view._nativeView;
        ios.font = nativeValue;
    };
    TextBaseStyler.getNativeFontInternalValue = function (view) {
        var ios = view._nativeView;
        return ios.font;
    };
    TextBaseStyler.setTextAlignmentProperty = function (view, newValue) {
        utils.ios.setTextAlignment(view._nativeView, newValue);
    };
    TextBaseStyler.resetTextAlignmentProperty = function (view, nativeValue) {
        var ios = view._nativeView;
        ios.textAlignment = nativeValue;
    };
    TextBaseStyler.getNativeTextAlignmentValue = function (view) {
        var ios = view._nativeView;
        return ios.textAlignment;
    };
    TextBaseStyler.setTextDecorationProperty = function (view, newValue) {
        utils.ios.setTextDecorationAndTransform(view, newValue, view.style.textTransform, view.style.letterSpacing);
    };
    TextBaseStyler.resetTextDecorationProperty = function (view, nativeValue) {
        utils.ios.setTextDecorationAndTransform(view, enums.TextDecoration.none, view.style.textTransform, view.style.letterSpacing);
    };
    TextBaseStyler.setTextTransformProperty = function (view, newValue) {
        utils.ios.setTextDecorationAndTransform(view, view.style.textDecoration, newValue, view.style.letterSpacing);
    };
    TextBaseStyler.resetTextTransformProperty = function (view, nativeValue) {
        utils.ios.setTextDecorationAndTransform(view, view.style.textDecoration, enums.TextTransform.none, view.style.letterSpacing);
    };
    TextBaseStyler.setWhiteSpaceProperty = function (view, newValue) {
        utils.ios.setWhiteSpace(view._nativeView, newValue);
    };
    TextBaseStyler.resetWhiteSpaceProperty = function (view, nativeValue) {
        utils.ios.setWhiteSpace(view._nativeView, enums.WhiteSpace.normal);
    };
    TextBaseStyler.setLetterSpacingProperty = function (view, newValue) {
        utils.ios.setTextDecorationAndTransform(view, view.style.textDecoration, enums.TextTransform.none, newValue);
    };
    TextBaseStyler.resetLetterSpacingProperty = function (view, nativeValue) {
        utils.ios.setTextDecorationAndTransform(view, view.style.textDecoration, enums.TextTransform.none, 0);
    };
    TextBaseStyler.setColorProperty = function (view, newValue) {
        var ios = view._nativeView;
        ios.textColor = newValue;
    };
    TextBaseStyler.resetColorProperty = function (view, nativeValue) {
        var ios = view._nativeView;
        ios.textColor = nativeValue;
    };
    TextBaseStyler.getNativeColorValue = function (view) {
        var ios = view._nativeView;
        return ios.textColor;
    };
    TextBaseStyler.registerHandlers = function () {
        style.registerHandler(style.fontInternalProperty, new style.StylePropertyChangedHandler(TextBaseStyler.setFontInternalProperty, TextBaseStyler.resetFontInternalProperty, TextBaseStyler.getNativeFontInternalValue), "TextBase");
        style.registerHandler(style.textAlignmentProperty, new style.StylePropertyChangedHandler(TextBaseStyler.setTextAlignmentProperty, TextBaseStyler.resetTextAlignmentProperty, TextBaseStyler.getNativeTextAlignmentValue), "TextBase");
        style.registerHandler(style.colorProperty, new style.StylePropertyChangedHandler(TextBaseStyler.setColorProperty, TextBaseStyler.resetColorProperty, TextBaseStyler.getNativeColorValue), "TextBase");
        style.registerHandler(style.textDecorationProperty, new style.StylePropertyChangedHandler(TextBaseStyler.setTextDecorationProperty, TextBaseStyler.resetTextDecorationProperty), "TextBase");
        style.registerHandler(style.textTransformProperty, new style.StylePropertyChangedHandler(TextBaseStyler.setTextTransformProperty, TextBaseStyler.resetTextTransformProperty), "TextBase");
        style.registerHandler(style.whiteSpaceProperty, new style.StylePropertyChangedHandler(TextBaseStyler.setWhiteSpaceProperty, TextBaseStyler.resetWhiteSpaceProperty), "TextBase");
        style.registerHandler(style.letterSpacingProperty, new style.StylePropertyChangedHandler(TextBaseStyler.setLetterSpacingProperty, TextBaseStyler.resetLetterSpacingProperty), "TextBase");
    };
    return TextBaseStyler;
}());
exports.TextBaseStyler = TextBaseStyler;
