var trace_1 = require("trace");
exports.rendererTraceCategory = "ns-renderer";
exports.routerTraceCategory = "ns-router";
exports.listViewTraceCategory = "ns-list-view";
function rendererLog(msg) {
    trace_1.write(msg, exports.rendererTraceCategory);
}
exports.rendererLog = rendererLog;
function rendererError(message) {
    trace_1.write(message, exports.rendererTraceCategory, trace_1.messageType.error);
}
exports.rendererError = rendererError;
function routerLog(message) {
    trace_1.write(message, exports.routerTraceCategory);
}
exports.routerLog = routerLog;
function styleError(message) {
    trace_1.write(message, trace_1.categories.Style, trace_1.messageType.error);
}
exports.styleError = styleError;
function listViewLog(message) {
    trace_1.write(message, exports.listViewTraceCategory);
}
exports.listViewLog = listViewLog;
//# sourceMappingURL=trace.js.map