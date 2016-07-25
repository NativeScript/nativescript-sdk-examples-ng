var frame_1 = require('ui/frame');
var page_1 = require('ui/page');
var di_1 = require('@angular/core/src/di');
var platform_1 = require("platform");
exports.APP_ROOT_VIEW = new di_1.OpaqueToken('App Root View');
exports.DEVICE = new di_1.OpaqueToken('platfrom device');
exports.defaultPageProvider = di_1.provide(page_1.Page, { useFactory: getDefaultPage });
function getDefaultPage() {
    var frame = frame_1.topmost();
    if (frame) {
        return frame.currentPage;
    }
    else {
        return null;
    }
}
exports.getDefaultPage = getDefaultPage;
exports.defaultDeviceProvider = di_1.provide(exports.DEVICE, { useValue: platform_1.device });
//# sourceMappingURL=platform-providers.js.map