var observable = require("data/observable");
var common = require("./list-view-common");
var utils = require("utils/utils");
var view = require("ui/core/view");
var stack_layout_1 = require("ui/layouts/stack-layout");
var proxy_view_container_1 = require("ui/proxy-view-container");
var color;
function ensureColor() {
    if (!color) {
        color = require("color");
    }
}
var CELLIDENTIFIER = "cell";
var ITEMLOADING = common.ListView.itemLoadingEvent;
var LOADMOREITEMS = common.ListView.loadMoreItemsEvent;
var ITEMTAP = common.ListView.itemTapEvent;
var DEFAULT_HEIGHT = 44;
global.moduleMerge(common, exports);
var infinity = utils.layout.makeMeasureSpec(0, utils.layout.UNSPECIFIED);
var ListViewCell = (function (_super) {
    __extends(ListViewCell, _super);
    function ListViewCell() {
        _super.apply(this, arguments);
    }
    ListViewCell.prototype.willMoveToSuperview = function (newSuperview) {
        var parent = (this.view ? this.view.parent : null);
        if (parent && !newSuperview) {
            parent._removeContainer(this);
        }
    };
    Object.defineProperty(ListViewCell.prototype, "view", {
        get: function () {
            return this.owner ? this.owner.get() : null;
        },
        enumerable: true,
        configurable: true
    });
    return ListViewCell;
}(UITableViewCell));
function notifyForItemAtIndex(listView, cell, view, eventName, indexPath) {
    var args = { eventName: eventName, object: listView, index: indexPath.row, view: view, ios: cell, android: undefined };
    listView.notify(args);
    return args;
}
var DataSource = (function (_super) {
    __extends(DataSource, _super);
    function DataSource() {
        _super.apply(this, arguments);
    }
    DataSource.initWithOwner = function (owner) {
        var dataSource = DataSource.new();
        dataSource._owner = owner;
        return dataSource;
    };
    DataSource.prototype.tableViewNumberOfRowsInSection = function (tableView, section) {
        var owner = this._owner.get();
        return (owner && owner.items) ? owner.items.length : 0;
    };
    DataSource.prototype.tableViewCellForRowAtIndexPath = function (tableView, indexPath) {
        var cell = (tableView.dequeueReusableCellWithIdentifier(CELLIDENTIFIER) || ListViewCell.new());
        var owner = this._owner.get();
        if (owner) {
            owner._prepareCell(cell, indexPath);
            var cellView = cell.view;
            if (cellView && cellView.isLayoutRequired) {
                var width = utils.layout.getMeasureSpecSize(owner.widthMeasureSpec);
                var rowHeight = owner._nativeView.rowHeight;
                var cellHeight = rowHeight > 0 ? rowHeight : owner.getHeight(indexPath.row);
                view.View.layoutChild(owner, cellView, 0, 0, width, cellHeight);
            }
        }
        return cell;
    };
    DataSource.ObjCProtocols = [UITableViewDataSource];
    return DataSource;
}(NSObject));
var UITableViewDelegateImpl = (function (_super) {
    __extends(UITableViewDelegateImpl, _super);
    function UITableViewDelegateImpl() {
        _super.apply(this, arguments);
    }
    UITableViewDelegateImpl.initWithOwner = function (owner) {
        var delegate = UITableViewDelegateImpl.new();
        delegate._owner = owner;
        return delegate;
    };
    UITableViewDelegateImpl.prototype.tableViewWillDisplayCellForRowAtIndexPath = function (tableView, cell, indexPath) {
        var owner = this._owner.get();
        if (owner && (indexPath.row === owner.items.length - 1)) {
            owner.notify({ eventName: LOADMOREITEMS, object: owner });
        }
    };
    UITableViewDelegateImpl.prototype.tableViewWillSelectRowAtIndexPath = function (tableView, indexPath) {
        var cell = tableView.cellForRowAtIndexPath(indexPath);
        var owner = this._owner.get();
        if (owner) {
            notifyForItemAtIndex(owner, cell, cell.view, ITEMTAP, indexPath);
        }
        return indexPath;
    };
    UITableViewDelegateImpl.prototype.tableViewDidSelectRowAtIndexPath = function (tableView, indexPath) {
        tableView.deselectRowAtIndexPathAnimated(indexPath, true);
        return indexPath;
    };
    UITableViewDelegateImpl.prototype.tableViewHeightForRowAtIndexPath = function (tableView, indexPath) {
        var owner = this._owner.get();
        if (!owner) {
            return DEFAULT_HEIGHT;
        }
        var height = undefined;
        if (utils.ios.MajorVersion >= 8) {
            height = owner.getHeight(indexPath.row);
        }
        if (utils.ios.MajorVersion < 8 || height === undefined) {
            var cell = this._measureCell;
            if (!cell) {
                this._measureCell = tableView.dequeueReusableCellWithIdentifier(CELLIDENTIFIER) || ListViewCell.new();
                cell = this._measureCell;
            }
            height = owner._prepareCell(cell, indexPath);
        }
        return height;
    };
    UITableViewDelegateImpl.ObjCProtocols = [UITableViewDelegate];
    return UITableViewDelegateImpl;
}(NSObject));
var UITableViewRowHeightDelegateImpl = (function (_super) {
    __extends(UITableViewRowHeightDelegateImpl, _super);
    function UITableViewRowHeightDelegateImpl() {
        _super.apply(this, arguments);
    }
    UITableViewRowHeightDelegateImpl.initWithOwner = function (owner) {
        var delegate = UITableViewRowHeightDelegateImpl.new();
        delegate._owner = owner;
        return delegate;
    };
    UITableViewRowHeightDelegateImpl.prototype.tableViewWillDisplayCellForRowAtIndexPath = function (tableView, cell, indexPath) {
        var owner = this._owner.get();
        if (owner && (indexPath.row === owner.items.length - 1)) {
            owner.notify({ eventName: LOADMOREITEMS, object: owner });
        }
    };
    UITableViewRowHeightDelegateImpl.prototype.tableViewWillSelectRowAtIndexPath = function (tableView, indexPath) {
        var cell = tableView.cellForRowAtIndexPath(indexPath);
        var owner = this._owner.get();
        if (owner) {
            notifyForItemAtIndex(owner, cell, cell.view, ITEMTAP, indexPath);
        }
        return indexPath;
    };
    UITableViewRowHeightDelegateImpl.prototype.tableViewHeightForRowAtIndexPath = function (tableView, indexPath) {
        var owner = this._owner.get();
        if (!owner) {
            return DEFAULT_HEIGHT;
        }
        return owner._rowHeight;
    };
    UITableViewRowHeightDelegateImpl.ObjCProtocols = [UITableViewDelegate];
    return UITableViewRowHeightDelegateImpl;
}(NSObject));
function onSeparatorColorPropertyChanged(data) {
    var bar = data.object;
    if (!bar.ios) {
        return;
    }
    ensureColor();
    if (data.newValue instanceof color.Color) {
        bar.ios.separatorColor = data.newValue.ios;
    }
}
common.ListView.separatorColorProperty.metadata.onSetNativeValue = onSeparatorColorPropertyChanged;
var ListView = (function (_super) {
    __extends(ListView, _super);
    function ListView() {
        _super.call(this);
        this._preparingCell = false;
        this._isDataDirty = false;
        this._rowHeight = -1;
        this.widthMeasureSpec = 0;
        this._ios = new UITableView();
        this._ios.registerClassForCellReuseIdentifier(ListViewCell.class(), CELLIDENTIFIER);
        this._ios.autoresizingMask = UIViewAutoresizing.UIViewAutoresizingNone;
        this._ios.estimatedRowHeight = DEFAULT_HEIGHT;
        this._ios.rowHeight = UITableViewAutomaticDimension;
        this._ios.dataSource = this._dataSource = DataSource.initWithOwner(new WeakRef(this));
        this._delegate = UITableViewDelegateImpl.initWithOwner(new WeakRef(this));
        this._heights = new Array();
        this._map = new Map();
    }
    ListView.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        if (this._isDataDirty) {
            this.refresh();
        }
        this._ios.delegate = this._delegate;
    };
    ListView.prototype.onUnloaded = function () {
        this._ios.delegate = null;
        _super.prototype.onUnloaded.call(this);
    };
    Object.defineProperty(ListView.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListView.prototype, "_childrenCount", {
        get: function () {
            return this._map.size;
        },
        enumerable: true,
        configurable: true
    });
    ListView.prototype._eachChildView = function (callback) {
        this._map.forEach(function (view, key) {
            callback(view);
        });
    };
    ListView.prototype.scrollToIndex = function (index) {
        if (this._ios) {
            this._ios.scrollToRowAtIndexPathAtScrollPositionAnimated(NSIndexPath.indexPathForItemInSection(index, 0), UITableViewScrollPosition.UITableViewScrollPositionTop, false);
        }
    };
    ListView.prototype.refresh = function () {
        this._map.forEach(function (view, nativeView, map) {
            if (!(view.bindingContext instanceof observable.Observable)) {
                view.bindingContext = null;
            }
        });
        if (this.isLoaded) {
            this._ios.reloadData();
            this.requestLayout();
            this._isDataDirty = false;
        }
        else {
            this._isDataDirty = true;
        }
    };
    ListView.prototype.getHeight = function (index) {
        return this._heights[index];
    };
    ListView.prototype.setHeight = function (index, value) {
        this._heights[index] = value;
    };
    ListView.prototype._onRowHeightPropertyChanged = function (data) {
        this._rowHeight = data.newValue;
        if (data.newValue < 0) {
            this._nativeView.rowHeight = UITableViewAutomaticDimension;
            this._nativeView.estimatedRowHeight = DEFAULT_HEIGHT;
            this._delegate = UITableViewDelegateImpl.initWithOwner(new WeakRef(this));
        }
        else {
            this._nativeView.rowHeight = data.newValue;
            this._nativeView.estimatedRowHeight = data.newValue;
            this._delegate = UITableViewRowHeightDelegateImpl.initWithOwner(new WeakRef(this));
        }
        if (this.isLoaded) {
            this._nativeView.delegate = this._delegate;
        }
        _super.prototype._onRowHeightPropertyChanged.call(this, data);
    };
    ListView.prototype.requestLayout = function () {
        if (!this._preparingCell) {
            _super.prototype.requestLayout.call(this);
        }
    };
    ListView.prototype.measure = function (widthMeasureSpec, heightMeasureSpec) {
        this.widthMeasureSpec = widthMeasureSpec;
        var changed = this._setCurrentMeasureSpecs(widthMeasureSpec, heightMeasureSpec);
        _super.prototype.measure.call(this, widthMeasureSpec, heightMeasureSpec);
        if (changed) {
            this._ios.reloadData();
        }
    };
    ListView.prototype._layoutCell = function (cellView, indexPath) {
        if (cellView) {
            var measuredSize = view.View.measureChild(this, cellView, this.widthMeasureSpec, this._rowHeight < 0 ? infinity : this._rowHeight);
            var height = measuredSize.measuredHeight;
            this.setHeight(indexPath.row, height);
            return height;
        }
        return DEFAULT_HEIGHT;
    };
    ListView.prototype._prepareCell = function (cell, indexPath) {
        var cellHeight;
        try {
            this._preparingCell = true;
            var view_1 = cell.view;
            if (!view_1) {
                view_1 = this._getItemTemplateContent(indexPath.row);
            }
            var args = notifyForItemAtIndex(this, cell, view_1, ITEMLOADING, indexPath);
            view_1 = args.view || this._getDefaultItemContent(indexPath.row);
            if (view_1 instanceof proxy_view_container_1.ProxyViewContainer) {
                var sp = new stack_layout_1.StackLayout();
                sp.addChild(view_1);
                view_1 = sp;
            }
            if (!cell.view) {
                cell.owner = new WeakRef(view_1);
            }
            else if (cell.view !== view_1) {
                this._removeContainer(cell);
                cell.view._nativeView.removeFromSuperview();
                cell.owner = new WeakRef(view_1);
            }
            this._prepareItem(view_1, indexPath.row);
            this._map.set(cell, view_1);
            if (view_1 && !view_1.parent && view_1._nativeView) {
                cell.contentView.addSubview(view_1._nativeView);
                this._addView(view_1);
            }
            cellHeight = this._layoutCell(view_1, indexPath);
        }
        finally {
            this._preparingCell = false;
        }
        return cellHeight;
    };
    ListView.prototype._removeContainer = function (cell) {
        var view = cell.view;
        if (!(view.parent instanceof ListView)) {
            this._removeView(view.parent);
        }
        view.parent._removeView(view);
        this._map.delete(cell);
    };
    return ListView;
}(common.ListView));
exports.ListView = ListView;
