var types = require("utils/types");
var UIImagePickerControllerDelegateImpl = (function (_super) {
    __extends(UIImagePickerControllerDelegateImpl, _super);
    function UIImagePickerControllerDelegateImpl() {
        _super.apply(this, arguments);
    }
    UIImagePickerControllerDelegateImpl.new = function () {
        return _super.new.call(this);
    };
    UIImagePickerControllerDelegateImpl.prototype.initWithCallback = function (callback) {
        this._callback = callback;
        return this;
    };
    UIImagePickerControllerDelegateImpl.prototype.initWithCallbackAndOptions = function (callback, options) {
        this._callback = callback;
        if (options) {
            this._width = options.width;
            this._height = options.height;
            this._saveToGallery = options.saveToGallery;
            this._keepAspectRatio = types.isNullOrUndefined(options.keepAspectRatio) ? true : options.keepAspectRatio;
        }
        return this;
    };
    UIImagePickerControllerDelegateImpl.prototype.imagePickerControllerDidFinishPickingMediaWithInfo = function (picker, info) {
        if (info) {
            var source = info.valueForKey(UIImagePickerControllerOriginalImage);
            if (source) {
                var image = null;
                if (this._width || this._height) {
                    var newSize = null;
                    if (this._keepAspectRatio) {
                        var common = require("./camera-common");
                        var aspectSafeSize = common.getAspectSafeDimensions(source.size.width, source.size.height, this._width, this._height);
                        newSize = CGSizeMake(aspectSafeSize.width, aspectSafeSize.height);
                    }
                    else {
                        newSize = CGSizeMake(this._width, this._height);
                    }
                    UIGraphicsBeginImageContextWithOptions(newSize, false, 0.0);
                    source.drawInRect(CGRectMake(0, 0, newSize.width, newSize.height));
                    image = UIGraphicsGetImageFromCurrentImageContext();
                    UIGraphicsEndImageContext();
                }
                var imageSource = require("image-source");
                var imageSourceResult = image ? imageSource.fromNativeSource(image) : imageSource.fromNativeSource(source);
                if (this._callback) {
                    this._callback(imageSourceResult);
                    if (this._saveToGallery) {
                        UIImageWriteToSavedPhotosAlbum(imageSourceResult.ios, null, null, null);
                    }
                }
            }
        }
        picker.presentingViewController.dismissViewControllerAnimatedCompletion(true, null);
        listener = null;
    };
    UIImagePickerControllerDelegateImpl.prototype.imagePickerControllerDidCancel = function (picker) {
        picker.presentingViewController.dismissViewControllerAnimatedCompletion(true, null);
        listener = null;
    };
    UIImagePickerControllerDelegateImpl.ObjCProtocols = [UIImagePickerControllerDelegate];
    return UIImagePickerControllerDelegateImpl;
}(NSObject));
var listener;
exports.takePicture = function (options) {
    return new Promise(function (resolve, reject) {
        listener = null;
        var imagePickerController = new UIImagePickerController();
        var reqWidth = 0;
        var reqHeight = 0;
        var keepAspectRatio = true;
        var saveToGallery = true;
        if (options) {
            reqWidth = options.width || 0;
            reqHeight = options.height || reqWidth;
            keepAspectRatio = types.isNullOrUndefined(options.keepAspectRatio) ? true : options.keepAspectRatio;
            saveToGallery = options.saveToGallery ? true : false;
        }
        if (reqWidth && reqHeight) {
            listener = UIImagePickerControllerDelegateImpl.new().initWithCallbackAndOptions(resolve, { width: reqWidth, height: reqHeight, keepAspectRatio: keepAspectRatio, saveToGallery: saveToGallery });
        }
        else if (saveToGallery) {
            listener = UIImagePickerControllerDelegateImpl.new().initWithCallbackAndOptions(resolve, { saveToGallery: saveToGallery });
        }
        else {
            listener = UIImagePickerControllerDelegateImpl.new().initWithCallback(resolve);
        }
        imagePickerController.delegate = listener;
        var sourceType = UIImagePickerControllerSourceType.UIImagePickerControllerSourceTypeCamera;
        var mediaTypes = UIImagePickerController.availableMediaTypesForSourceType(sourceType);
        if (mediaTypes) {
            imagePickerController.mediaTypes = mediaTypes;
            imagePickerController.sourceType = sourceType;
        }
        imagePickerController.modalPresentationStyle = UIModalPresentationStyle.UIModalPresentationCurrentContext;
        var frame = require("ui/frame");
        var topMostFrame = frame.topmost();
        if (topMostFrame) {
            var viewController = topMostFrame.currentPage && topMostFrame.currentPage.ios;
            if (viewController) {
                viewController.presentViewControllerAnimatedCompletion(imagePickerController, true, null);
            }
        }
    });
};
exports.isAvailable = function () {
    return UIImagePickerController.isSourceTypeAvailable(UIImagePickerControllerSourceType.UIImagePickerControllerSourceTypeCamera);
};
