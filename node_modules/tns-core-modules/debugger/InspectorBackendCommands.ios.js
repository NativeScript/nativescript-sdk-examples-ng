function DomainDispatcher(domain) {
    return function (klass) { return __registerDomainDispatcher(domain, klass); };
}
exports.DomainDispatcher = DomainDispatcher;
var ApplicationCacheDomain;
(function (ApplicationCacheDomain) {
    var ApplicationCacheFrontend = (function () {
        function ApplicationCacheFrontend() {
        }
        ApplicationCacheFrontend.prototype.applicationCacheStatusUpdated = function (frameId, manifestURL, status) {
            __inspectorSendEvent(JSON.stringify({ "method": "ApplicationCache.applicationCacheStatusUpdated", "params": { "frameId": frameId, "manifestURL": manifestURL, "status": status } }));
        };
        ApplicationCacheFrontend.prototype.networkStateUpdated = function (isNowOnline) {
            __inspectorSendEvent(JSON.stringify({ "method": "ApplicationCache.networkStateUpdated", "params": { "isNowOnline": isNowOnline } }));
        };
        return ApplicationCacheFrontend;
    }());
    ApplicationCacheDomain.ApplicationCacheFrontend = ApplicationCacheFrontend;
})(ApplicationCacheDomain = exports.ApplicationCacheDomain || (exports.ApplicationCacheDomain = {}));
var CSSDomain;
(function (CSSDomain) {
    ;
    ;
    var CSSFrontend = (function () {
        function CSSFrontend() {
        }
        CSSFrontend.prototype.mediaQueryResultChanged = function () {
            __inspectorSendEvent(JSON.stringify({ "method": "CSS.mediaQueryResultChanged", "params": {} }));
        };
        CSSFrontend.prototype.styleSheetChanged = function (styleSheetId) {
            __inspectorSendEvent(JSON.stringify({ "method": "CSS.styleSheetChanged", "params": { "styleSheetId": styleSheetId } }));
        };
        CSSFrontend.prototype.styleSheetAdded = function (header) {
            __inspectorSendEvent(JSON.stringify({ "method": "CSS.styleSheetAdded", "params": { "header": header } }));
        };
        CSSFrontend.prototype.styleSheetRemoved = function (styleSheetId) {
            __inspectorSendEvent(JSON.stringify({ "method": "CSS.styleSheetRemoved", "params": { "styleSheetId": styleSheetId } }));
        };
        CSSFrontend.prototype.namedFlowCreated = function (namedFlow) {
            __inspectorSendEvent(JSON.stringify({ "method": "CSS.namedFlowCreated", "params": { "namedFlow": namedFlow } }));
        };
        CSSFrontend.prototype.namedFlowRemoved = function (documentNodeId, flowName) {
            __inspectorSendEvent(JSON.stringify({ "method": "CSS.namedFlowRemoved", "params": { "documentNodeId": documentNodeId, "flowName": flowName } }));
        };
        CSSFrontend.prototype.regionOversetChanged = function (namedFlow) {
            __inspectorSendEvent(JSON.stringify({ "method": "CSS.regionOversetChanged", "params": { "namedFlow": namedFlow } }));
        };
        CSSFrontend.prototype.registeredNamedFlowContentElement = function (documentNodeId, flowName, contentNodeId, nextContentNodeId) {
            __inspectorSendEvent(JSON.stringify({ "method": "CSS.registeredNamedFlowContentElement", "params": { "documentNodeId": documentNodeId, "flowName": flowName, "contentNodeId": contentNodeId, "nextContentNodeId": nextContentNodeId } }));
        };
        CSSFrontend.prototype.unregisteredNamedFlowContentElement = function (documentNodeId, flowName, contentNodeId) {
            __inspectorSendEvent(JSON.stringify({ "method": "CSS.unregisteredNamedFlowContentElement", "params": { "documentNodeId": documentNodeId, "flowName": flowName, "contentNodeId": contentNodeId } }));
        };
        return CSSFrontend;
    }());
    CSSDomain.CSSFrontend = CSSFrontend;
})(CSSDomain = exports.CSSDomain || (exports.CSSDomain = {}));
var ConsoleDomain;
(function (ConsoleDomain) {
    var ConsoleFrontend = (function () {
        function ConsoleFrontend() {
        }
        ConsoleFrontend.prototype.messageAdded = function (message) {
            __inspectorSendEvent(JSON.stringify({ "method": "Console.messageAdded", "params": { "message": message } }));
        };
        ConsoleFrontend.prototype.messageRepeatCountUpdated = function (count) {
            __inspectorSendEvent(JSON.stringify({ "method": "Console.messageRepeatCountUpdated", "params": { "count": count } }));
        };
        ConsoleFrontend.prototype.messagesCleared = function () {
            __inspectorSendEvent(JSON.stringify({ "method": "Console.messagesCleared", "params": {} }));
        };
        return ConsoleFrontend;
    }());
    ConsoleDomain.ConsoleFrontend = ConsoleFrontend;
})(ConsoleDomain = exports.ConsoleDomain || (exports.ConsoleDomain = {}));
var DOMDomain;
(function (DOMDomain) {
    ;
    ;
    var DOMFrontend = (function () {
        function DOMFrontend() {
        }
        DOMFrontend.prototype.documentUpdated = function () {
            __inspectorSendEvent(JSON.stringify({ "method": "DOM.documentUpdated", "params": {} }));
        };
        DOMFrontend.prototype.setChildNodes = function (parentId, nodes) {
            __inspectorSendEvent(JSON.stringify({ "method": "DOM.setChildNodes", "params": { "parentId": parentId, "nodes": nodes } }));
        };
        DOMFrontend.prototype.attributeModified = function (nodeId, name, value) {
            __inspectorSendEvent(JSON.stringify({ "method": "DOM.attributeModified", "params": { "nodeId": nodeId, "name": name, "value": value } }));
        };
        DOMFrontend.prototype.attributeRemoved = function (nodeId, name) {
            __inspectorSendEvent(JSON.stringify({ "method": "DOM.attributeRemoved", "params": { "nodeId": nodeId, "name": name } }));
        };
        DOMFrontend.prototype.inlineStyleInvalidated = function (nodeIds) {
            __inspectorSendEvent(JSON.stringify({ "method": "DOM.inlineStyleInvalidated", "params": { "nodeIds": nodeIds } }));
        };
        DOMFrontend.prototype.characterDataModified = function (nodeId, characterData) {
            __inspectorSendEvent(JSON.stringify({ "method": "DOM.characterDataModified", "params": { "nodeId": nodeId, "characterData": characterData } }));
        };
        DOMFrontend.prototype.childNodeCountUpdated = function (nodeId, childNodeCount) {
            __inspectorSendEvent(JSON.stringify({ "method": "DOM.childNodeCountUpdated", "params": { "nodeId": nodeId, "childNodeCount": childNodeCount } }));
        };
        DOMFrontend.prototype.childNodeInserted = function (parentNodeId, previousNodeId, node) {
            __inspectorSendEvent(JSON.stringify({ "method": "DOM.childNodeInserted", "params": { "parentNodeId": parentNodeId, "previousNodeId": previousNodeId, "node": node } }));
        };
        DOMFrontend.prototype.childNodeRemoved = function (parentNodeId, nodeId) {
            __inspectorSendEvent(JSON.stringify({ "method": "DOM.childNodeRemoved", "params": { "parentNodeId": parentNodeId, "nodeId": nodeId } }));
        };
        DOMFrontend.prototype.shadowRootPushed = function (hostId, root) {
            __inspectorSendEvent(JSON.stringify({ "method": "DOM.shadowRootPushed", "params": { "hostId": hostId, "root": root } }));
        };
        DOMFrontend.prototype.shadowRootPopped = function (hostId, rootId) {
            __inspectorSendEvent(JSON.stringify({ "method": "DOM.shadowRootPopped", "params": { "hostId": hostId, "rootId": rootId } }));
        };
        DOMFrontend.prototype.pseudoElementAdded = function (parentId, pseudoElement) {
            __inspectorSendEvent(JSON.stringify({ "method": "DOM.pseudoElementAdded", "params": { "parentId": parentId, "pseudoElement": pseudoElement } }));
        };
        DOMFrontend.prototype.pseudoElementRemoved = function (parentId, pseudoElementId) {
            __inspectorSendEvent(JSON.stringify({ "method": "DOM.pseudoElementRemoved", "params": { "parentId": parentId, "pseudoElementId": pseudoElementId } }));
        };
        return DOMFrontend;
    }());
    DOMDomain.DOMFrontend = DOMFrontend;
})(DOMDomain = exports.DOMDomain || (exports.DOMDomain = {}));
var DOMDebuggerDomain;
(function (DOMDebuggerDomain) {
    ;
})(DOMDebuggerDomain = exports.DOMDebuggerDomain || (exports.DOMDebuggerDomain = {}));
var DOMStorageDomain;
(function (DOMStorageDomain) {
    var DOMStorageFrontend = (function () {
        function DOMStorageFrontend() {
        }
        DOMStorageFrontend.prototype.domStorageItemsCleared = function (storageId) {
            __inspectorSendEvent(JSON.stringify({ "method": "DOMStorage.domStorageItemsCleared", "params": { "storageId": storageId } }));
        };
        DOMStorageFrontend.prototype.domStorageItemRemoved = function (storageId, key) {
            __inspectorSendEvent(JSON.stringify({ "method": "DOMStorage.domStorageItemRemoved", "params": { "storageId": storageId, "key": key } }));
        };
        DOMStorageFrontend.prototype.domStorageItemAdded = function (storageId, key, newValue) {
            __inspectorSendEvent(JSON.stringify({ "method": "DOMStorage.domStorageItemAdded", "params": { "storageId": storageId, "key": key, "newValue": newValue } }));
        };
        DOMStorageFrontend.prototype.domStorageItemUpdated = function (storageId, key, oldValue, newValue) {
            __inspectorSendEvent(JSON.stringify({ "method": "DOMStorage.domStorageItemUpdated", "params": { "storageId": storageId, "key": key, "oldValue": oldValue, "newValue": newValue } }));
        };
        return DOMStorageFrontend;
    }());
    DOMStorageDomain.DOMStorageFrontend = DOMStorageFrontend;
})(DOMStorageDomain = exports.DOMStorageDomain || (exports.DOMStorageDomain = {}));
var DatabaseDomain;
(function (DatabaseDomain) {
    var DatabaseFrontend = (function () {
        function DatabaseFrontend() {
        }
        DatabaseFrontend.prototype.addDatabase = function (database) {
            __inspectorSendEvent(JSON.stringify({ "method": "Database.addDatabase", "params": { "database": database } }));
        };
        return DatabaseFrontend;
    }());
    DatabaseDomain.DatabaseFrontend = DatabaseFrontend;
})(DatabaseDomain = exports.DatabaseDomain || (exports.DatabaseDomain = {}));
var DebuggerDomain;
(function (DebuggerDomain) {
    var DebuggerFrontend = (function () {
        function DebuggerFrontend() {
        }
        DebuggerFrontend.prototype.globalObjectCleared = function () {
            __inspectorSendEvent(JSON.stringify({ "method": "Debugger.globalObjectCleared", "params": {} }));
        };
        DebuggerFrontend.prototype.scriptParsed = function (scriptId, url, startLine, startColumn, endLine, endColumn, isContentScript, sourceMapURL, hasSourceURL) {
            __inspectorSendEvent(JSON.stringify({ "method": "Debugger.scriptParsed", "params": { "scriptId": scriptId, "url": url, "startLine": startLine, "startColumn": startColumn, "endLine": endLine, "endColumn": endColumn, "isContentScript": isContentScript, "sourceMapURL": sourceMapURL, "hasSourceURL": hasSourceURL } }));
        };
        DebuggerFrontend.prototype.scriptFailedToParse = function (url, scriptSource, startLine, errorLine, errorMessage) {
            __inspectorSendEvent(JSON.stringify({ "method": "Debugger.scriptFailedToParse", "params": { "url": url, "scriptSource": scriptSource, "startLine": startLine, "errorLine": errorLine, "errorMessage": errorMessage } }));
        };
        DebuggerFrontend.prototype.breakpointResolved = function (breakpointId, location) {
            __inspectorSendEvent(JSON.stringify({ "method": "Debugger.breakpointResolved", "params": { "breakpointId": breakpointId, "location": location } }));
        };
        DebuggerFrontend.prototype.paused = function (callFrames, reason, data) {
            __inspectorSendEvent(JSON.stringify({ "method": "Debugger.paused", "params": { "callFrames": callFrames, "reason": reason, "data": data } }));
        };
        DebuggerFrontend.prototype.resumed = function () {
            __inspectorSendEvent(JSON.stringify({ "method": "Debugger.resumed", "params": {} }));
        };
        DebuggerFrontend.prototype.didSampleProbe = function (sample) {
            __inspectorSendEvent(JSON.stringify({ "method": "Debugger.didSampleProbe", "params": { "sample": sample } }));
        };
        DebuggerFrontend.prototype.playBreakpointActionSound = function (breakpointActionId) {
            __inspectorSendEvent(JSON.stringify({ "method": "Debugger.playBreakpointActionSound", "params": { "breakpointActionId": breakpointActionId } }));
        };
        return DebuggerFrontend;
    }());
    DebuggerDomain.DebuggerFrontend = DebuggerFrontend;
})(DebuggerDomain = exports.DebuggerDomain || (exports.DebuggerDomain = {}));
var HeapDomain;
(function (HeapDomain) {
    var HeapFrontend = (function () {
        function HeapFrontend() {
        }
        HeapFrontend.prototype.garbageCollected = function (collection) {
            __inspectorSendEvent(JSON.stringify({ "method": "Heap.garbageCollected", "params": { "collection": collection } }));
        };
        return HeapFrontend;
    }());
    HeapDomain.HeapFrontend = HeapFrontend;
})(HeapDomain = exports.HeapDomain || (exports.HeapDomain = {}));
var InspectorDomain;
(function (InspectorDomain) {
    var InspectorFrontend = (function () {
        function InspectorFrontend() {
        }
        InspectorFrontend.prototype.evaluateForTestInFrontend = function (script) {
            __inspectorSendEvent(JSON.stringify({ "method": "Inspector.evaluateForTestInFrontend", "params": { "script": script } }));
        };
        InspectorFrontend.prototype.inspect = function (object, hints) {
            __inspectorSendEvent(JSON.stringify({ "method": "Inspector.inspect", "params": { "object": object, "hints": hints } }));
        };
        InspectorFrontend.prototype.detached = function (reason) {
            __inspectorSendEvent(JSON.stringify({ "method": "Inspector.detached", "params": { "reason": reason } }));
        };
        InspectorFrontend.prototype.activateExtraDomains = function (domains) {
            __inspectorSendEvent(JSON.stringify({ "method": "Inspector.activateExtraDomains", "params": { "domains": domains } }));
        };
        InspectorFrontend.prototype.targetCrashed = function () {
            __inspectorSendEvent(JSON.stringify({ "method": "Inspector.targetCrashed", "params": {} }));
        };
        return InspectorFrontend;
    }());
    InspectorDomain.InspectorFrontend = InspectorFrontend;
})(InspectorDomain = exports.InspectorDomain || (exports.InspectorDomain = {}));
var LayerTreeDomain;
(function (LayerTreeDomain) {
    var LayerTreeFrontend = (function () {
        function LayerTreeFrontend() {
        }
        LayerTreeFrontend.prototype.layerTreeDidChange = function () {
            __inspectorSendEvent(JSON.stringify({ "method": "LayerTree.layerTreeDidChange", "params": {} }));
        };
        return LayerTreeFrontend;
    }());
    LayerTreeDomain.LayerTreeFrontend = LayerTreeFrontend;
})(LayerTreeDomain = exports.LayerTreeDomain || (exports.LayerTreeDomain = {}));
var NetworkDomain;
(function (NetworkDomain) {
    var NetworkFrontend = (function () {
        function NetworkFrontend() {
        }
        NetworkFrontend.prototype.requestWillBeSent = function (requestId, frameId, loaderId, documentURL, request, timestamp, initiator, redirectResponse, type) {
            __inspectorSendEvent(JSON.stringify({ "method": "Network.requestWillBeSent", "params": { "requestId": requestId, "frameId": frameId, "loaderId": loaderId, "documentURL": documentURL, "request": request, "timestamp": timestamp, "initiator": initiator, "redirectResponse": redirectResponse, "type": type } }));
        };
        NetworkFrontend.prototype.requestServedFromCache = function (requestId) {
            __inspectorSendEvent(JSON.stringify({ "method": "Network.requestServedFromCache", "params": { "requestId": requestId } }));
        };
        NetworkFrontend.prototype.responseReceived = function (requestId, frameId, loaderId, timestamp, type, response) {
            __inspectorSendEvent(JSON.stringify({ "method": "Network.responseReceived", "params": { "requestId": requestId, "frameId": frameId, "loaderId": loaderId, "timestamp": timestamp, "type": type, "response": response } }));
        };
        NetworkFrontend.prototype.dataReceived = function (requestId, timestamp, dataLength, encodedDataLength) {
            __inspectorSendEvent(JSON.stringify({ "method": "Network.dataReceived", "params": { "requestId": requestId, "timestamp": timestamp, "dataLength": dataLength, "encodedDataLength": encodedDataLength } }));
        };
        NetworkFrontend.prototype.loadingFinished = function (requestId, timestamp, sourceMapURL) {
            __inspectorSendEvent(JSON.stringify({ "method": "Network.loadingFinished", "params": { "requestId": requestId, "timestamp": timestamp, "sourceMapURL": sourceMapURL } }));
        };
        NetworkFrontend.prototype.loadingFailed = function (requestId, timestamp, errorText, canceled) {
            __inspectorSendEvent(JSON.stringify({ "method": "Network.loadingFailed", "params": { "requestId": requestId, "timestamp": timestamp, "errorText": errorText, "canceled": canceled } }));
        };
        NetworkFrontend.prototype.requestServedFromMemoryCache = function (requestId, frameId, loaderId, documentURL, timestamp, initiator, resource) {
            __inspectorSendEvent(JSON.stringify({ "method": "Network.requestServedFromMemoryCache", "params": { "requestId": requestId, "frameId": frameId, "loaderId": loaderId, "documentURL": documentURL, "timestamp": timestamp, "initiator": initiator, "resource": resource } }));
        };
        NetworkFrontend.prototype.webSocketWillSendHandshakeRequest = function (requestId, timestamp, request) {
            __inspectorSendEvent(JSON.stringify({ "method": "Network.webSocketWillSendHandshakeRequest", "params": { "requestId": requestId, "timestamp": timestamp, "request": request } }));
        };
        NetworkFrontend.prototype.webSocketHandshakeResponseReceived = function (requestId, timestamp, response) {
            __inspectorSendEvent(JSON.stringify({ "method": "Network.webSocketHandshakeResponseReceived", "params": { "requestId": requestId, "timestamp": timestamp, "response": response } }));
        };
        NetworkFrontend.prototype.webSocketCreated = function (requestId, url) {
            __inspectorSendEvent(JSON.stringify({ "method": "Network.webSocketCreated", "params": { "requestId": requestId, "url": url } }));
        };
        NetworkFrontend.prototype.webSocketClosed = function (requestId, timestamp) {
            __inspectorSendEvent(JSON.stringify({ "method": "Network.webSocketClosed", "params": { "requestId": requestId, "timestamp": timestamp } }));
        };
        NetworkFrontend.prototype.webSocketFrameReceived = function (requestId, timestamp, response) {
            __inspectorSendEvent(JSON.stringify({ "method": "Network.webSocketFrameReceived", "params": { "requestId": requestId, "timestamp": timestamp, "response": response } }));
        };
        NetworkFrontend.prototype.webSocketFrameError = function (requestId, timestamp, errorMessage) {
            __inspectorSendEvent(JSON.stringify({ "method": "Network.webSocketFrameError", "params": { "requestId": requestId, "timestamp": timestamp, "errorMessage": errorMessage } }));
        };
        NetworkFrontend.prototype.webSocketFrameSent = function (requestId, timestamp, response) {
            __inspectorSendEvent(JSON.stringify({ "method": "Network.webSocketFrameSent", "params": { "requestId": requestId, "timestamp": timestamp, "response": response } }));
        };
        return NetworkFrontend;
    }());
    NetworkDomain.NetworkFrontend = NetworkFrontend;
})(NetworkDomain = exports.NetworkDomain || (exports.NetworkDomain = {}));
var PageDomain;
(function (PageDomain) {
    ;
    ;
    var PageFrontend = (function () {
        function PageFrontend() {
        }
        PageFrontend.prototype.domContentEventFired = function (timestamp) {
            __inspectorSendEvent(JSON.stringify({ "method": "Page.domContentEventFired", "params": { "timestamp": timestamp } }));
        };
        PageFrontend.prototype.loadEventFired = function (timestamp) {
            __inspectorSendEvent(JSON.stringify({ "method": "Page.loadEventFired", "params": { "timestamp": timestamp } }));
        };
        PageFrontend.prototype.frameNavigated = function (frame) {
            __inspectorSendEvent(JSON.stringify({ "method": "Page.frameNavigated", "params": { "frame": frame } }));
        };
        PageFrontend.prototype.frameDetached = function (frameId) {
            __inspectorSendEvent(JSON.stringify({ "method": "Page.frameDetached", "params": { "frameId": frameId } }));
        };
        PageFrontend.prototype.frameStartedLoading = function (frameId) {
            __inspectorSendEvent(JSON.stringify({ "method": "Page.frameStartedLoading", "params": { "frameId": frameId } }));
        };
        PageFrontend.prototype.frameStoppedLoading = function (frameId) {
            __inspectorSendEvent(JSON.stringify({ "method": "Page.frameStoppedLoading", "params": { "frameId": frameId } }));
        };
        PageFrontend.prototype.frameScheduledNavigation = function (frameId, delay) {
            __inspectorSendEvent(JSON.stringify({ "method": "Page.frameScheduledNavigation", "params": { "frameId": frameId, "delay": delay } }));
        };
        PageFrontend.prototype.frameClearedScheduledNavigation = function (frameId) {
            __inspectorSendEvent(JSON.stringify({ "method": "Page.frameClearedScheduledNavigation", "params": { "frameId": frameId } }));
        };
        PageFrontend.prototype.javascriptDialogOpening = function (message) {
            __inspectorSendEvent(JSON.stringify({ "method": "Page.javascriptDialogOpening", "params": { "message": message } }));
        };
        PageFrontend.prototype.javascriptDialogClosed = function () {
            __inspectorSendEvent(JSON.stringify({ "method": "Page.javascriptDialogClosed", "params": {} }));
        };
        PageFrontend.prototype.scriptsEnabled = function (isEnabled) {
            __inspectorSendEvent(JSON.stringify({ "method": "Page.scriptsEnabled", "params": { "isEnabled": isEnabled } }));
        };
        return PageFrontend;
    }());
    PageDomain.PageFrontend = PageFrontend;
})(PageDomain = exports.PageDomain || (exports.PageDomain = {}));
var ReplayDomain;
(function (ReplayDomain) {
    ;
    ;
    var ReplayFrontend = (function () {
        function ReplayFrontend() {
        }
        ReplayFrontend.prototype.captureStarted = function () {
            __inspectorSendEvent(JSON.stringify({ "method": "Replay.captureStarted", "params": {} }));
        };
        ReplayFrontend.prototype.captureStopped = function () {
            __inspectorSendEvent(JSON.stringify({ "method": "Replay.captureStopped", "params": {} }));
        };
        ReplayFrontend.prototype.playbackHitPosition = function (position, timestamp) {
            __inspectorSendEvent(JSON.stringify({ "method": "Replay.playbackHitPosition", "params": { "position": position, "timestamp": timestamp } }));
        };
        ReplayFrontend.prototype.playbackStarted = function () {
            __inspectorSendEvent(JSON.stringify({ "method": "Replay.playbackStarted", "params": {} }));
        };
        ReplayFrontend.prototype.playbackPaused = function (position) {
            __inspectorSendEvent(JSON.stringify({ "method": "Replay.playbackPaused", "params": { "position": position } }));
        };
        ReplayFrontend.prototype.playbackFinished = function () {
            __inspectorSendEvent(JSON.stringify({ "method": "Replay.playbackFinished", "params": {} }));
        };
        ReplayFrontend.prototype.inputSuppressionChanged = function (willSuppress) {
            __inspectorSendEvent(JSON.stringify({ "method": "Replay.inputSuppressionChanged", "params": { "willSuppress": willSuppress } }));
        };
        ReplayFrontend.prototype.sessionCreated = function (id) {
            __inspectorSendEvent(JSON.stringify({ "method": "Replay.sessionCreated", "params": { "id": id } }));
        };
        ReplayFrontend.prototype.sessionModified = function (id) {
            __inspectorSendEvent(JSON.stringify({ "method": "Replay.sessionModified", "params": { "id": id } }));
        };
        ReplayFrontend.prototype.sessionRemoved = function (id) {
            __inspectorSendEvent(JSON.stringify({ "method": "Replay.sessionRemoved", "params": { "id": id } }));
        };
        ReplayFrontend.prototype.sessionLoaded = function (id) {
            __inspectorSendEvent(JSON.stringify({ "method": "Replay.sessionLoaded", "params": { "id": id } }));
        };
        ReplayFrontend.prototype.segmentCreated = function (id) {
            __inspectorSendEvent(JSON.stringify({ "method": "Replay.segmentCreated", "params": { "id": id } }));
        };
        ReplayFrontend.prototype.segmentRemoved = function (id) {
            __inspectorSendEvent(JSON.stringify({ "method": "Replay.segmentRemoved", "params": { "id": id } }));
        };
        ReplayFrontend.prototype.segmentCompleted = function (id) {
            __inspectorSendEvent(JSON.stringify({ "method": "Replay.segmentCompleted", "params": { "id": id } }));
        };
        ReplayFrontend.prototype.segmentLoaded = function (segmentIdentifier) {
            __inspectorSendEvent(JSON.stringify({ "method": "Replay.segmentLoaded", "params": { "segmentIdentifier": segmentIdentifier } }));
        };
        ReplayFrontend.prototype.segmentUnloaded = function () {
            __inspectorSendEvent(JSON.stringify({ "method": "Replay.segmentUnloaded", "params": {} }));
        };
        return ReplayFrontend;
    }());
    ReplayDomain.ReplayFrontend = ReplayFrontend;
})(ReplayDomain = exports.ReplayDomain || (exports.ReplayDomain = {}));
var RuntimeDomain;
(function (RuntimeDomain) {
    ;
    var RuntimeFrontend = (function () {
        function RuntimeFrontend() {
        }
        RuntimeFrontend.prototype.executionContextCreated = function (context) {
            __inspectorSendEvent(JSON.stringify({ "method": "Runtime.executionContextCreated", "params": { "context": context } }));
        };
        return RuntimeFrontend;
    }());
    RuntimeDomain.RuntimeFrontend = RuntimeFrontend;
})(RuntimeDomain = exports.RuntimeDomain || (exports.RuntimeDomain = {}));
var TimelineDomain;
(function (TimelineDomain) {
    ;
    var TimelineFrontend = (function () {
        function TimelineFrontend() {
        }
        TimelineFrontend.prototype.eventRecorded = function (record) {
            __inspectorSendEvent(JSON.stringify({ "method": "Timeline.eventRecorded", "params": { "record": record } }));
        };
        TimelineFrontend.prototype.recordingStarted = function (startTime) {
            __inspectorSendEvent(JSON.stringify({ "method": "Timeline.recordingStarted", "params": { "startTime": startTime } }));
        };
        TimelineFrontend.prototype.recordingStopped = function (endTime) {
            __inspectorSendEvent(JSON.stringify({ "method": "Timeline.recordingStopped", "params": { "endTime": endTime } }));
        };
        return TimelineFrontend;
    }());
    TimelineDomain.TimelineFrontend = TimelineFrontend;
})(TimelineDomain = exports.TimelineDomain || (exports.TimelineDomain = {}));
var WorkerDomain;
(function (WorkerDomain) {
    var WorkerFrontend = (function () {
        function WorkerFrontend() {
        }
        WorkerFrontend.prototype.workerCreated = function (workerId, url, inspectorConnected) {
            __inspectorSendEvent(JSON.stringify({ "method": "Worker.workerCreated", "params": { "workerId": workerId, "url": url, "inspectorConnected": inspectorConnected } }));
        };
        WorkerFrontend.prototype.workerTerminated = function (workerId) {
            __inspectorSendEvent(JSON.stringify({ "method": "Worker.workerTerminated", "params": { "workerId": workerId } }));
        };
        WorkerFrontend.prototype.dispatchMessageFromWorker = function (workerId, message) {
            __inspectorSendEvent(JSON.stringify({ "method": "Worker.dispatchMessageFromWorker", "params": { "workerId": workerId, "message": message } }));
        };
        WorkerFrontend.prototype.disconnectedFromWorker = function () {
            __inspectorSendEvent(JSON.stringify({ "method": "Worker.disconnectedFromWorker", "params": {} }));
        };
        return WorkerFrontend;
    }());
    WorkerDomain.WorkerFrontend = WorkerFrontend;
})(WorkerDomain = exports.WorkerDomain || (exports.WorkerDomain = {}));
