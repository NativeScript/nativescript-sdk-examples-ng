var enums = require("ui/enums");
var common = require("./font-common");
var fs = require("file-system");
var Font = (function (_super) {
    __extends(Font, _super);
    function Font(family, size, style, weight) {
        _super.call(this, family, size, style, weight);
    }
    Font.prototype.getUIFont = function (defaultFont) {
        if (!this._uiFont) {
            this._uiFont = createUIFont(this, defaultFont);
        }
        return this._uiFont;
    };
    Font.prototype.withFontFamily = function (family) {
        return new Font(family, this.fontSize, this.fontStyle, this.fontWeight);
    };
    Font.prototype.withFontStyle = function (style) {
        return new Font(this.fontFamily, this.fontSize, style, this.fontWeight);
    };
    Font.prototype.withFontWeight = function (weight) {
        return new Font(this.fontFamily, this.fontSize, this.fontStyle, weight);
    };
    Font.prototype.withFontSize = function (size) {
        return new Font(this.fontFamily, size, this.fontStyle, this.fontWeight);
    };
    Font.default = new Font(undefined, undefined, enums.FontStyle.normal, enums.FontWeight.normal);
    return Font;
}(common.Font));
exports.Font = Font;
var areSystemFontSetsValid = false;
exports.systemFontFamilies = new Set();
exports.systemFonts = new Set();
function ensureSystemFontSets() {
    if (areSystemFontSetsValid) {
        return;
    }
    var nsFontFamilies = UIFont.familyNames();
    for (var i = 0; i < nsFontFamilies.count; i++) {
        var family = nsFontFamilies.objectAtIndex(i);
        exports.systemFontFamilies.add(family);
        var nsFonts = UIFont.fontNamesForFamilyName(family);
        for (var j = 0; j < nsFonts.count; j++) {
            var font = nsFonts.objectAtIndex(j);
            exports.systemFonts.add(font);
        }
    }
    areSystemFontSetsValid = true;
}
exports.ensureSystemFontSets = ensureSystemFontSets;
var DEFAULT_SERIF = "Times New Roman";
var DEFAULT_MONOSPACE = "Courier New";
function getFontFamilyRespectingGenericFonts(fontFamily) {
    if (!fontFamily) {
        return fontFamily;
    }
    switch (fontFamily.toLowerCase()) {
        case common.genericFontFamilies.serif:
            return DEFAULT_SERIF;
        case common.genericFontFamilies.monospace:
            return DEFAULT_MONOSPACE;
        default:
            return fontFamily;
    }
}
function createUIFont(font, defaultFont) {
    var size = font.fontSize || defaultFont.pointSize;
    var descriptor;
    var symbolicTraits = 0;
    if (font.isBold) {
        symbolicTraits |= UIFontDescriptorSymbolicTraits.UIFontDescriptorTraitBold;
    }
    if (font.isItalic) {
        symbolicTraits |= UIFontDescriptorSymbolicTraits.UIFontDescriptorTraitItalic;
    }
    descriptor = tryResolveWithSystemFont(font, size, symbolicTraits);
    if (!descriptor) {
        descriptor = tryResolveByFamily(font);
    }
    if (!descriptor) {
        descriptor = defaultFont.fontDescriptor().fontDescriptorWithSymbolicTraits(symbolicTraits);
    }
    return UIFont.fontWithDescriptorSize(descriptor, size);
}
function tryResolveWithSystemFont(font, size, symbolicTraits) {
    var systemFont;
    switch (font.fontFamily) {
        case common.genericFontFamilies.sansSerif:
        case common.genericFontFamilies.system:
            if (UIFont.systemFontOfSizeWeight) {
                systemFont = UIFont.systemFontOfSizeWeight(size, getiOSFontWeight(font.fontWeight));
            }
            else {
                systemFont = UIFont.systemFontOfSize(size);
            }
            result = systemFont.fontDescriptor().fontDescriptorWithSymbolicTraits(symbolicTraits);
            break;
        case common.genericFontFamilies.monospace:
            if (UIFont.monospacedDigitSystemFontOfSizeWeight) {
                systemFont = UIFont.monospacedDigitSystemFontOfSizeWeight(size, getiOSFontWeight(font.fontWeight));
                result = systemFont.fontDescriptor().fontDescriptorWithSymbolicTraits(symbolicTraits);
            }
            break;
    }
    if (systemFont) {
        var result = systemFont.fontDescriptor().fontDescriptorWithSymbolicTraits(symbolicTraits);
        return result;
    }
    return null;
}
function tryResolveByFamily(font) {
    var fonts = common.parseFontFamily(font.fontFamily);
    var result = null;
    if (fonts.length === 0) {
        return null;
    }
    ensureSystemFontSets();
    for (var i = 0; i < fonts.length; i++) {
        var fontFamily = getFontFamilyRespectingGenericFonts(fonts[i]);
        var fontFace = getiOSFontFace(fontFamily, font.fontWeight, font.isItalic);
        if (exports.systemFonts.has(fontFamily) && !fontFace) {
            result = UIFontDescriptor.fontDescriptorWithNameSize(fontFamily, 0);
        }
        else if (exports.systemFontFamilies.has(fontFamily)) {
            result = createFontDescriptor(fontFamily, fontFace);
        }
        if (result) {
            return result;
        }
    }
    return null;
}
function createFontDescriptor(fontFamily, fontFace) {
    var fontAttributes = NSMutableDictionary.alloc().init();
    fontAttributes.setObjectForKey(fontFamily, "NSFontFamilyAttribute");
    if (fontFace) {
        fontAttributes.setObjectForKey(fontFace, "NSFontFaceAttribute");
    }
    return UIFontDescriptor.fontDescriptorWithFontAttributes(fontAttributes);
}
function getiOSFontWeight(fontWeight) {
    if (!UIFont.systemFontOfSizeWeight) {
        throw new Error("Font weight is available in iOS 8.2 and later.");
    }
    switch (fontWeight) {
        case enums.FontWeight.thin:
            return UIFontWeightThin;
        case enums.FontWeight.extraLight:
            return UIFontWeightUltraLight;
        case enums.FontWeight.light:
            return UIFontWeightLight;
        case enums.FontWeight.normal:
        case "400":
        case undefined:
        case null:
            return UIFontWeightRegular;
        case enums.FontWeight.medium:
            return UIFontWeightMedium;
        case enums.FontWeight.semiBold:
            return UIFontWeightSemibold;
        case enums.FontWeight.bold:
        case "700":
            return UIFontWeightBold;
        case enums.FontWeight.extraBold:
            return UIFontWeightHeavy;
        case enums.FontWeight.black:
            return UIFontWeightBlack;
        default:
            throw new Error("Invalid font weight: \"" + fontWeight + "\"");
    }
}
function combineWeightStringWithItalic(weight, isItalic) {
    if (!isItalic) {
        return weight;
    }
    if (!weight) {
        return "Italic";
    }
    return weight + " Italic";
}
function canLoadFont(fontFamily, fontFace) {
    var trialDescriptor = createFontDescriptor(fontFamily, fontFace);
    var trialFont = UIFont.fontWithDescriptorSize(trialDescriptor, 0);
    return trialFont.familyName === fontFamily;
}
function findCorrectWeightString(fontFamily, weightStringAlternatives, isItalic) {
    var i = 0;
    var length = weightStringAlternatives.length;
    for (; i < length; i++) {
        var possibleFontFace = combineWeightStringWithItalic(weightStringAlternatives[i], isItalic);
        if (canLoadFont(fontFamily, possibleFontFace)) {
            return weightStringAlternatives[i];
        }
    }
    return weightStringAlternatives[0];
}
function getiOSFontFace(fontFamily, fontWeight, isItalic) {
    var weight;
    switch (fontWeight) {
        case enums.FontWeight.thin:
            weight = "Thin";
            break;
        case enums.FontWeight.extraLight:
            weight = findCorrectWeightString(fontFamily, ["Ultra Light", "UltraLight", "Extra Light", "ExtraLight", "Ultra light", "Ultralight", "Extra light", "Extralight"], isItalic);
            break;
        case enums.FontWeight.light:
            weight = "Light";
            break;
        case enums.FontWeight.normal:
        case "400":
        case undefined:
        case null:
            weight = "";
            break;
        case enums.FontWeight.medium:
            weight = "Medium";
            break;
        case enums.FontWeight.semiBold:
            weight = findCorrectWeightString(fontFamily, ["Demi Bold", "DemiBold", "Semi Bold", "SemiBold", "Demi bold", "Demibold", "Semi bold", "Semibold"], isItalic);
            break;
        case enums.FontWeight.bold:
        case "700":
            weight = "Bold";
            break;
        case enums.FontWeight.extraBold:
            weight = findCorrectWeightString(fontFamily, ["Heavy", "Extra Bold", "ExtraBold", "Extra bold", "Extrabold"], isItalic);
            break;
        case enums.FontWeight.black:
            weight = "Black";
            break;
        default:
            throw new Error("Invalid font weight: \"" + fontWeight + "\"");
    }
    return combineWeightStringWithItalic(weight, isItalic);
}
var ios;
(function (ios) {
    function registerFont(fontFile) {
        var filePath = fs.path.join(fs.knownFolders.currentApp().path, "fonts", fontFile);
        if (!fs.File.exists(filePath)) {
            filePath = fs.path.join(fs.knownFolders.currentApp().path, fontFile);
        }
        var fontData = NSFileManager.defaultManager().contentsAtPath(filePath);
        if (!fontData) {
            throw new Error("Could not load font from: " + fontFile);
        }
        var provider = CGDataProviderCreateWithCFData(fontData);
        var font = CGFontCreateWithDataProvider(provider);
        if (!font) {
            throw new Error("Could not load font from: " + fontFile);
        }
        var error = new interop.Reference();
        if (!CTFontManagerRegisterGraphicsFont(font, error)) {
            var trace = require("trace");
            if (trace.enabled) {
                trace.write("Error occur while registering font: " + CFErrorCopyDescription(error.value), trace.categories.Error, trace.messageType.error);
            }
        }
        areSystemFontSetsValid = false;
    }
    ios.registerFont = registerFont;
})(ios = exports.ios || (exports.ios = {}));
function registerCustomFonts() {
    var fontsFolderPath = fs.path.join(__dirname.substring(0, __dirname.indexOf("/tns_modules")), "fonts");
    if (fs.Folder.exists(fontsFolderPath)) {
        var fontsFolder = fs.Folder.fromPath(fontsFolderPath);
        var onEachEntityFunc = function (fileEntity) {
            if (fs.Folder.exists(fs.path.join(fontsFolderPath, fileEntity.name))) {
                return true;
            }
            if (fileEntity instanceof fs.File &&
                (fileEntity.extension === ".ttf" || fileEntity.extension === ".otf")) {
                ios.registerFont(fileEntity.name);
            }
            return true;
        };
        fontsFolder.eachEntity(onEachEntityFunc);
    }
}
registerCustomFonts();
