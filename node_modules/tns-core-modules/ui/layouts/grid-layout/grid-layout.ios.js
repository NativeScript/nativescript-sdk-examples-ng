var utils = require("utils/utils");
var common = require("./grid-layout-common");
var view_1 = require("ui/core/view");
var enums_1 = require("ui/enums");
global.moduleMerge(common, exports);
var GridLayout = (function (_super) {
    __extends(GridLayout, _super);
    function GridLayout() {
        _super.call(this);
        this.columnOffsets = new Array();
        this.rowOffsets = new Array();
        this.map = new Map();
        this.helper = new MeasureHelper(this);
    }
    GridLayout.prototype._onRowAdded = function (itemSpec) {
        this.helper.rows.push(new ItemGroup(itemSpec));
    };
    GridLayout.prototype._onColumnAdded = function (itemSpec) {
        this.helper.columns.push(new ItemGroup(itemSpec));
    };
    GridLayout.prototype._onRowRemoved = function (itemSpec, index) {
        this.helper.rows[index].children.length = 0;
        this.helper.rows.splice(index, 1);
    };
    GridLayout.prototype._onColumnRemoved = function (itemSpec, index) {
        this.helper.columns[index].children.length = 0;
        this.helper.columns.splice(index, 1);
    };
    GridLayout.prototype._registerLayoutChild = function (child) {
        this.addToMap(child);
    };
    GridLayout.prototype._unregisterLayoutChild = function (child) {
        this.removeFromMap(child);
    };
    GridLayout.prototype.getColumnIndex = function (view) {
        return Math.max(0, Math.min(GridLayout.getColumn(view), this.columnsInternal.length - 1));
    };
    GridLayout.prototype.getRowIndex = function (view) {
        return Math.max(0, Math.min(GridLayout.getRow(view), this.rowsInternal.length - 1));
    };
    GridLayout.prototype.getColumnSpan = function (view, columnIndex) {
        return Math.max(1, Math.min(GridLayout.getColumnSpan(view), this.columnsInternal.length - columnIndex));
    };
    GridLayout.prototype.getRowSpan = function (view, rowIndex) {
        return Math.max(1, Math.min(GridLayout.getRowSpan(view), this.rowsInternal.length - rowIndex));
    };
    GridLayout.prototype.getColumnSpec = function (view) {
        return this.columnsInternal[this.getColumnIndex(view)] || this.helper.singleColumn;
    };
    GridLayout.prototype.getRowSpec = function (view) {
        return this.rowsInternal[this.getRowIndex(view)] || this.helper.singleRow;
    };
    GridLayout.prototype.updateMeasureSpecs = function (child, measureSpec) {
        var column = this.getColumnSpec(child);
        var columnIndex = this.getColumnIndex(child);
        var columnSpan = this.getColumnSpan(child, columnIndex);
        var row = this.getRowSpec(child);
        var rowIndex = this.getRowIndex(child);
        var rowSpan = this.getRowSpan(child, rowIndex);
        measureSpec.setColumn(column);
        measureSpec.setColumnIndex(columnIndex);
        measureSpec.setColumnSpan(columnSpan);
        measureSpec.setRow(row);
        measureSpec.setRowIndex(rowIndex);
        measureSpec.setRowSpan(rowSpan);
        measureSpec.autoColumnsCount = 0;
        measureSpec.autoRowsCount = 0;
        measureSpec.measured = false;
        measureSpec.pixelHeight = 0;
        measureSpec.pixelWidth = 0;
        measureSpec.starColumnsCount = 0;
        measureSpec.starRowsCount = 0;
    };
    GridLayout.prototype.addToMap = function (child) {
        this.map.set(child, new MeasureSpecs(child));
    };
    GridLayout.prototype.removeFromMap = function (child) {
        this.map.delete(child);
    };
    GridLayout.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var _this = this;
        GridLayout.adjustChildrenLayoutParams(this, widthMeasureSpec, heightMeasureSpec);
        _super.prototype.onMeasure.call(this, widthMeasureSpec, heightMeasureSpec);
        var measureWidth = 0;
        var measureHeight = 0;
        var width = utils.layout.getMeasureSpecSize(widthMeasureSpec);
        var widthMode = utils.layout.getMeasureSpecMode(widthMeasureSpec);
        var height = utils.layout.getMeasureSpecSize(heightMeasureSpec);
        var heightMode = utils.layout.getMeasureSpecMode(heightMeasureSpec);
        var density = utils.layout.getDisplayDensity();
        var verticalPadding = (this.paddingTop + this.paddingBottom) * density;
        var horizontalPadding = (this.paddingLeft + this.paddingRight) * density;
        var infinityWidth = widthMode === utils.layout.UNSPECIFIED;
        var infinityHeight = heightMode === utils.layout.UNSPECIFIED;
        this.helper.width = Math.max(0, width - horizontalPadding);
        this.helper.height = Math.max(0, height - verticalPadding);
        this.helper.stretchedHorizontally = widthMode === utils.layout.EXACTLY || (this.horizontalAlignment === enums_1.HorizontalAlignment.stretch && !infinityWidth);
        this.helper.stretchedVertically = heightMode === utils.layout.EXACTLY || (this.verticalAlignment === enums_1.VerticalAlignment.stretch && !infinityHeight);
        this.helper.setInfinityWidth(infinityWidth);
        this.helper.setInfinityHeight(infinityHeight);
        this.helper.clearMeasureSpecs();
        this.helper.init();
        this.eachLayoutChild(function (child, last) {
            var measureSpecs = _this.map.get(child);
            _this.updateMeasureSpecs(child, measureSpecs);
            _this.helper.addMeasureSpec(measureSpecs);
        });
        this.helper.measure();
        measureWidth = this.helper.measuredWidth + horizontalPadding;
        measureHeight = this.helper.measuredHeight + verticalPadding;
        measureWidth = Math.max(measureWidth, this.minWidth * density);
        measureHeight = Math.max(measureHeight, this.minHeight * density);
        var widthSizeAndState = view_1.View.resolveSizeAndState(measureWidth, width, widthMode, 0);
        var heightSizeAndState = view_1.View.resolveSizeAndState(measureHeight, height, heightMode, 0);
        this.setMeasuredDimension(widthSizeAndState, heightSizeAndState);
    };
    GridLayout.prototype.onLayout = function (left, top, right, bottom) {
        _super.prototype.onLayout.call(this, left, top, right, bottom);
        var density = utils.layout.getDisplayDensity();
        var paddingLeft = this.paddingLeft * density;
        var paddingTop = this.paddingTop * density;
        this.columnOffsets.length = 0;
        this.rowOffsets.length = 0;
        this.columnOffsets.push(paddingLeft);
        this.rowOffsets.push(paddingTop);
        var offset = this.columnOffsets[0];
        var roundedOffset = paddingLeft;
        var roundedLength = 0;
        var actualLength = 0;
        for (var i = 0, size = this.helper.columns.length; i < size; i++) {
            var columnGroup = this.helper.columns[i];
            offset += columnGroup.length;
            actualLength = offset - roundedOffset;
            roundedLength = Math.round(actualLength);
            columnGroup.rowOrColumn._actualLength = roundedLength;
            roundedOffset += roundedLength;
            this.columnOffsets.push(roundedOffset);
        }
        offset = this.rowOffsets[0];
        roundedOffset = paddingTop;
        roundedLength = 0;
        actualLength = 0;
        for (var i = 0, size = this.helper.rows.length; i < size; i++) {
            var rowGroup = this.helper.rows[i];
            offset += rowGroup.length;
            actualLength = offset - roundedOffset;
            roundedLength = Math.round(actualLength);
            rowGroup.rowOrColumn._actualLength = roundedLength;
            roundedOffset += roundedLength;
            this.rowOffsets.push(roundedOffset);
        }
        for (var i = 0, columns = this.helper.columns.length; i < columns; i++) {
            var columnGroup = this.helper.columns[i];
            for (var j = 0, children = columnGroup.children.length; j < children; j++) {
                var measureSpec = columnGroup.children[j];
                var childLeft = this.columnOffsets[measureSpec.getColumnIndex()];
                var childRight = this.columnOffsets[measureSpec.getColumnIndex() + measureSpec.getColumnSpan()];
                var childTop = this.rowOffsets[measureSpec.getRowIndex()];
                var childBottom = this.rowOffsets[measureSpec.getRowIndex() + measureSpec.getRowSpan()];
                view_1.View.layoutChild(this, measureSpec.child, childLeft, childTop, childRight, childBottom);
            }
        }
        GridLayout.restoreOriginalParams(this);
    };
    return GridLayout;
}(common.GridLayout));
exports.GridLayout = GridLayout;
var MeasureSpecs = (function () {
    function MeasureSpecs(child) {
        this._columnSpan = 1;
        this._rowSpan = 1;
        this.pixelWidth = 0;
        this.pixelHeight = 0;
        this.starColumnsCount = 0;
        this.starRowsCount = 0;
        this.autoColumnsCount = 0;
        this.autoRowsCount = 0;
        this.measured = false;
        this.columnIndex = 0;
        this.rowIndex = 0;
        this.child = child;
    }
    MeasureSpecs.prototype.getSpanned = function () {
        return this._columnSpan > 1 || this._rowSpan > 1;
    };
    MeasureSpecs.prototype.getIsStar = function () {
        return this.starRowsCount > 0 || this.starColumnsCount > 0;
    };
    MeasureSpecs.prototype.getColumnSpan = function () {
        return this._columnSpan;
    };
    MeasureSpecs.prototype.getRowSpan = function () {
        return this._rowSpan;
    };
    MeasureSpecs.prototype.setRowSpan = function (value) {
        this._rowSpan = Math.max(1, value);
    };
    MeasureSpecs.prototype.setColumnSpan = function (value) {
        this._columnSpan = Math.max(1, value);
    };
    MeasureSpecs.prototype.getRowIndex = function () {
        return this.rowIndex;
    };
    MeasureSpecs.prototype.getColumnIndex = function () {
        return this.columnIndex;
    };
    MeasureSpecs.prototype.setRowIndex = function (value) {
        this.rowIndex = value;
    };
    MeasureSpecs.prototype.setColumnIndex = function (value) {
        this.columnIndex = value;
    };
    MeasureSpecs.prototype.getRow = function () {
        return this.row;
    };
    MeasureSpecs.prototype.getColumn = function () {
        return this.column;
    };
    MeasureSpecs.prototype.setRow = function (value) {
        this.row = value;
    };
    MeasureSpecs.prototype.setColumn = function (value) {
        this.column = value;
    };
    return MeasureSpecs;
}());
var ItemGroup = (function () {
    function ItemGroup(spec) {
        this.length = 0;
        this.measuredCount = 0;
        this.children = new Array();
        this.measureToFix = 0;
        this.currentMeasureToFixCount = 0;
        this.infinityLength = false;
        this.rowOrColumn = spec;
    }
    ItemGroup.prototype.setIsLengthInfinity = function (infinityLength) {
        this.infinityLength = infinityLength;
    };
    ItemGroup.prototype.init = function (density) {
        this.measuredCount = 0;
        this.currentMeasureToFixCount = 0;
        this.length = this.rowOrColumn.isAbsolute ? this.rowOrColumn.value * density : 0;
    };
    ItemGroup.prototype.getAllMeasured = function () {
        return this.measuredCount === this.children.length;
    };
    ItemGroup.prototype.getCanBeFixed = function () {
        return this.currentMeasureToFixCount === this.measureToFix;
    };
    ItemGroup.prototype.getIsAuto = function () {
        return this.rowOrColumn.isAuto || (this.rowOrColumn.isStar && this.infinityLength);
    };
    ItemGroup.prototype.getIsStar = function () {
        return this.rowOrColumn.isStar && !this.infinityLength;
    };
    ItemGroup.prototype.getIsAbsolute = function () {
        return this.rowOrColumn.isAbsolute;
    };
    return ItemGroup;
}());
var MeasureHelper = (function () {
    function MeasureHelper(grid) {
        this.infinity = utils.layout.makeMeasureSpec(0, utils.layout.UNSPECIFIED);
        this.rows = new Array();
        this.columns = new Array();
        this.width = 0;
        this.height = 0;
        this.stretchedHorizontally = false;
        this.stretchedVertically = false;
        this.infinityWidth = false;
        this.infinityHeight = false;
        this.minColumnStarValue = 0;
        this.maxColumnStarValue = 0;
        this.minRowStarValue = 0;
        this.maxRowStarValue = 0;
        this.measuredWidth = 0;
        this.measuredHeight = 0;
        this.fakeRowAdded = false;
        this.fakeColumnAdded = false;
        this.grid = grid;
        this.singleRow = new common.ItemSpec();
        this.singleColumn = new common.ItemSpec();
        this.singleRowGroup = new ItemGroup(this.singleRow);
        this.singleColumnGroup = new ItemGroup(this.singleColumn);
    }
    MeasureHelper.prototype.setInfinityWidth = function (value) {
        if (this.infinityWidth !== value) {
            this.infinityWidth = value;
            for (var i = 0, size = this.columns.length; i < size; i++) {
                var columnGroup = this.columns[i];
                columnGroup.setIsLengthInfinity(value);
            }
        }
    };
    MeasureHelper.prototype.setInfinityHeight = function (value) {
        if (this.infinityHeight !== value) {
            this.infinityHeight = value;
            for (var i = 0, size = this.rows.length; i < size; i++) {
                var rowGroup = this.rows[i];
                rowGroup.setIsLengthInfinity(value);
            }
        }
    };
    MeasureHelper.prototype.addMeasureSpec = function (measureSpec) {
        var size = measureSpec.getColumnIndex() + measureSpec.getColumnSpan();
        for (var i = measureSpec.getColumnIndex(); i < size; i++) {
            var columnGroup = this.columns[i];
            if (columnGroup.getIsAuto()) {
                measureSpec.autoColumnsCount++;
            }
            else if (columnGroup.getIsStar()) {
                measureSpec.starColumnsCount += columnGroup.rowOrColumn.value;
            }
            else if (columnGroup.getIsAbsolute()) {
                measureSpec.pixelWidth += columnGroup.rowOrColumn.value;
            }
        }
        if (measureSpec.autoColumnsCount > 0 && measureSpec.starColumnsCount === 0) {
            for (var i = measureSpec.getColumnIndex(); i < size; i++) {
                var columnGroup = this.columns[i];
                if (columnGroup.getIsAuto()) {
                    columnGroup.measureToFix++;
                }
            }
        }
        size = measureSpec.getRowIndex() + measureSpec.getRowSpan();
        for (var i = measureSpec.getRowIndex(); i < size; i++) {
            var rowGroup = this.rows[i];
            if (rowGroup.getIsAuto()) {
                measureSpec.autoRowsCount++;
            }
            else if (rowGroup.getIsStar()) {
                measureSpec.starRowsCount += rowGroup.rowOrColumn.value;
            }
            else if (rowGroup.getIsAbsolute()) {
                measureSpec.pixelHeight += rowGroup.rowOrColumn.value;
            }
        }
        if (measureSpec.autoRowsCount > 0 && measureSpec.starRowsCount === 0) {
            for (var i = measureSpec.getRowIndex(); i < size; i++) {
                var rowGroup = this.rows[i];
                if (rowGroup.getIsAuto()) {
                    rowGroup.measureToFix++;
                }
            }
        }
        this.columns[measureSpec.getColumnIndex()].children.push(measureSpec);
        this.rows[measureSpec.getRowIndex()].children.push(measureSpec);
    };
    MeasureHelper.prototype.clearMeasureSpecs = function () {
        for (var i = 0, size = this.columns.length; i < size; i++) {
            this.columns[i].children.length = 0;
        }
        for (var i = 0, size = this.rows.length; i < size; i++) {
            this.rows[i].children.length = 0;
        }
    };
    MeasureHelper.initList = function (list) {
        var density = utils.layout.getDisplayDensity();
        for (var i = 0, size = list.length; i < size; i++) {
            var item = list[i];
            item.init(density);
        }
    };
    MeasureHelper.prototype.init = function () {
        var rows = this.rows.length;
        if (rows === 0) {
            this.singleRowGroup.setIsLengthInfinity(this.infinityHeight);
            this.rows.push(this.singleRowGroup);
            this.fakeRowAdded = true;
        }
        else if (rows > 1 && this.fakeRowAdded) {
            this.rows.splice(0, 1);
            this.fakeRowAdded = false;
        }
        var cols = this.columns.length;
        if (cols === 0) {
            this.fakeColumnAdded = true;
            this.singleColumnGroup.setIsLengthInfinity(this.infinityWidth);
            this.columns.push(this.singleColumnGroup);
        }
        else if (cols > 1 && this.fakeColumnAdded) {
            this.columns.splice(0, 1);
            this.fakeColumnAdded = false;
        }
        MeasureHelper.initList(this.rows);
        MeasureHelper.initList(this.columns);
        this.minColumnStarValue = -1;
        this.minRowStarValue = -1;
        this.maxColumnStarValue = -1;
        this.maxRowStarValue = -1;
    };
    MeasureHelper.prototype.itemMeasured = function (measureSpec, isFakeMeasure) {
        if (!isFakeMeasure) {
            this.columns[measureSpec.getColumnIndex()].measuredCount++;
            this.rows[measureSpec.getRowIndex()].measuredCount++;
            measureSpec.measured = true;
        }
        if (measureSpec.autoColumnsCount > 0 && measureSpec.starColumnsCount === 0) {
            var size = measureSpec.getColumnIndex() + measureSpec.getColumnSpan();
            for (var i = measureSpec.getColumnIndex(); i < size; i++) {
                var columnGroup = this.columns[i];
                if (columnGroup.getIsAuto()) {
                    columnGroup.currentMeasureToFixCount++;
                }
            }
        }
        if (measureSpec.autoRowsCount > 0 && measureSpec.starRowsCount === 0) {
            var size = measureSpec.getRowIndex() + measureSpec.getRowSpan();
            for (var i = measureSpec.getRowIndex(); i < size; i++) {
                var rowGroup = this.rows[i];
                if (rowGroup.getIsAuto()) {
                    rowGroup.currentMeasureToFixCount++;
                }
            }
        }
    };
    MeasureHelper.prototype.fixColumns = function () {
        var currentColumnWidth = 0;
        var columnStarCount = 0;
        var columnCount = this.columns.length;
        for (var i = 0; i < columnCount; i++) {
            var item = this.columns[i];
            if (item.rowOrColumn.isStar) {
                columnStarCount += item.rowOrColumn.value;
            }
            else {
                currentColumnWidth += item.length;
            }
        }
        var widthForStarColumns = Math.max(0, this.width - currentColumnWidth);
        this.maxColumnStarValue = columnStarCount > 0 ? widthForStarColumns / columnStarCount : 0;
        MeasureHelper.updateStarLength(this.columns, this.maxColumnStarValue);
    };
    MeasureHelper.prototype.fixRows = function () {
        var currentRowHeight = 0;
        var rowStarCount = 0;
        var rowCount = this.rows.length;
        for (var i = 0; i < rowCount; i++) {
            var item = this.rows[i];
            if (item.rowOrColumn.isStar) {
                rowStarCount += item.rowOrColumn.value;
            }
            else {
                currentRowHeight += item.length;
            }
        }
        var heightForStarRows = Math.max(0, this.height - currentRowHeight);
        this.maxRowStarValue = rowStarCount > 0 ? heightForStarRows / rowStarCount : 0;
        MeasureHelper.updateStarLength(this.rows, this.maxRowStarValue);
    };
    MeasureHelper.updateStarLength = function (list, starValue) {
        var offset = 0;
        var roundedOffset = 0;
        for (var i = 0, rowCount = list.length; i < rowCount; i++) {
            var item = list[i];
            if (item.getIsStar()) {
                offset += item.rowOrColumn.value * starValue;
                var actualLength = offset - roundedOffset;
                var roundedLength = Math.round(actualLength);
                item.length = roundedLength;
                roundedOffset += roundedLength;
            }
        }
    };
    MeasureHelper.prototype.fakeMeasure = function () {
        for (var i = 0, size = this.columns.length; i < size; i++) {
            var columnGroup = this.columns[i];
            if (columnGroup.getAllMeasured()) {
                continue;
            }
            for (var j = 0, childrenCount = columnGroup.children.length; j < childrenCount; j++) {
                var measureSpec = columnGroup.children[j];
                if (measureSpec.starRowsCount > 0 && measureSpec.autoColumnsCount > 0 && measureSpec.starColumnsCount === 0) {
                    this.measureChild(measureSpec, true);
                }
            }
        }
    };
    MeasureHelper.prototype.measureFixedColumnsNoStarRows = function () {
        for (var i = 0, size = this.columns.length; i < size; i++) {
            var columnGroup = this.columns[i];
            for (var j = 0, childrenCount = columnGroup.children.length; j < childrenCount; j++) {
                var measureSpec = columnGroup.children[j];
                if (measureSpec.starColumnsCount > 0 && measureSpec.starRowsCount === 0) {
                    this.measureChildFixedColumns(measureSpec);
                }
            }
        }
    };
    MeasureHelper.prototype.measureNoStarColumnsFixedRows = function () {
        for (var i = 0, size = this.columns.length; i < size; i++) {
            var columnGroup = this.columns[i];
            for (var j = 0, childrenCount = columnGroup.children.length; j < childrenCount; j++) {
                var measureSpec = columnGroup.children[j];
                if (measureSpec.starRowsCount > 0 && measureSpec.starColumnsCount === 0) {
                    this.measureChildFixedRows(measureSpec);
                }
            }
        }
    };
    MeasureHelper.canFix = function (list) {
        for (var i = 0, size = list.length; i < size; i++) {
            var item = list[i];
            if (!item.getCanBeFixed()) {
                return false;
            }
        }
        return true;
    };
    MeasureHelper.getMeasureLength = function (list) {
        var result = 0;
        for (var i = 0, size = list.length; i < size; i++) {
            var item = list[i];
            result += item.length;
        }
        return result;
    };
    MeasureHelper.prototype.measure = function () {
        var size = this.columns.length;
        for (var i = 0; i < size; i++) {
            var columnGroup = this.columns[i];
            for (var j = 0, childrenCount = columnGroup.children.length; j < childrenCount; j++) {
                var measureSpec = columnGroup.children[j];
                if (measureSpec.getIsStar() || measureSpec.getSpanned()) {
                    continue;
                }
                this.measureChild(measureSpec, false);
            }
        }
        for (var i = 0; i < size; i++) {
            var columnGroup = this.columns[i];
            for (var j = 0, childrenCount = columnGroup.children.length; j < childrenCount; j++) {
                var measureSpec = columnGroup.children[j];
                if (measureSpec.getIsStar() || !measureSpec.getSpanned()) {
                    continue;
                }
                this.measureChild(measureSpec, false);
            }
        }
        var fixColumns = MeasureHelper.canFix(this.columns);
        var fixRows = MeasureHelper.canFix(this.rows);
        if (fixColumns) {
            this.fixColumns();
        }
        if (fixRows) {
            this.fixRows();
        }
        if (!fixColumns && !fixRows) {
            this.fakeMeasure();
            this.fixColumns();
            this.measureFixedColumnsNoStarRows();
            this.fixRows();
        }
        else if (fixColumns && !fixRows) {
            this.measureFixedColumnsNoStarRows();
            this.fixRows();
        }
        else if (!fixColumns && fixRows) {
            this.measureNoStarColumnsFixedRows();
            this.fixColumns();
        }
        size = this.columns.length;
        for (var i = 0; i < size; i++) {
            var columnGroup = this.columns[i];
            for (var j = 0, childCount = columnGroup.children.length; j < childCount; j++) {
                var measureSpec = columnGroup.children[j];
                if (!measureSpec.measured) {
                    this.measureChildFixedColumnsAndRows(measureSpec);
                }
            }
        }
        if (!this.stretchedHorizontally && this.minColumnStarValue !== -1 && this.minColumnStarValue < this.maxColumnStarValue) {
            MeasureHelper.updateStarLength(this.columns, this.minColumnStarValue);
        }
        if (!this.stretchedVertically && this.minRowStarValue !== -1 && this.minRowStarValue < this.maxRowStarValue) {
            MeasureHelper.updateStarLength(this.rows, this.minRowStarValue);
        }
        this.measuredWidth = MeasureHelper.getMeasureLength(this.columns);
        this.measuredHeight = MeasureHelper.getMeasureLength(this.rows);
    };
    MeasureHelper.prototype.measureChild = function (measureSpec, isFakeMeasure) {
        var widthMeasureSpec = (measureSpec.autoColumnsCount > 0) ? this.infinity : utils.layout.makeMeasureSpec(measureSpec.pixelWidth, utils.layout.EXACTLY);
        var heightMeasureSpec = (isFakeMeasure || measureSpec.autoRowsCount > 0) ? this.infinity : utils.layout.makeMeasureSpec(measureSpec.pixelHeight, utils.layout.EXACTLY);
        var childSize = view_1.View.measureChild(null, measureSpec.child, widthMeasureSpec, heightMeasureSpec);
        var childMeasuredWidth = childSize.measuredWidth;
        var childMeasuredHeight = childSize.measuredHeight;
        var columnSpanEnd = measureSpec.getColumnIndex() + measureSpec.getColumnSpan();
        var rowSpanEnd = measureSpec.getRowIndex() + measureSpec.getRowSpan();
        if (measureSpec.autoColumnsCount > 0) {
            var remainingSpace = childMeasuredWidth;
            for (var i = measureSpec.getColumnIndex(); i < columnSpanEnd; i++) {
                var columnGroup = this.columns[i];
                remainingSpace -= columnGroup.length;
            }
            if (remainingSpace > 0) {
                var growSize = remainingSpace / measureSpec.autoColumnsCount;
                for (var i = measureSpec.getColumnIndex(); i < columnSpanEnd; i++) {
                    var columnGroup = this.columns[i];
                    if (columnGroup.getIsAuto()) {
                        columnGroup.length += growSize;
                    }
                }
            }
        }
        if (!isFakeMeasure && measureSpec.autoRowsCount > 0) {
            var remainingSpace = childMeasuredHeight;
            for (var i = measureSpec.getRowIndex(); i < rowSpanEnd; i++) {
                var rowGroup = this.rows[i];
                remainingSpace -= rowGroup.length;
            }
            if (remainingSpace > 0) {
                var growSize = remainingSpace / measureSpec.autoRowsCount;
                for (var i = measureSpec.getRowIndex(); i < rowSpanEnd; i++) {
                    var rowGroup = this.rows[i];
                    if (rowGroup.getIsAuto()) {
                        rowGroup.length += growSize;
                    }
                }
            }
        }
        this.itemMeasured(measureSpec, isFakeMeasure);
    };
    MeasureHelper.prototype.measureChildFixedColumns = function (measureSpec) {
        var columnIndex = measureSpec.getColumnIndex();
        var columnSpanEnd = columnIndex + measureSpec.getColumnSpan();
        var rowIndex = measureSpec.getRowIndex();
        var rowSpanEnd = rowIndex + measureSpec.getRowSpan();
        var measureWidth = 0;
        var growSize = 0;
        for (var i = columnIndex; i < columnSpanEnd; i++) {
            var columnGroup = this.columns[i];
            measureWidth += columnGroup.length;
        }
        var widthMeasureSpec = utils.layout.makeMeasureSpec(measureWidth, this.stretchedHorizontally ? utils.layout.EXACTLY : utils.layout.AT_MOST);
        var heightMeasureSpec = (measureSpec.autoRowsCount > 0) ? this.infinity : utils.layout.makeMeasureSpec(measureSpec.pixelHeight, utils.layout.EXACTLY);
        var childSize = view_1.View.measureChild(null, measureSpec.child, widthMeasureSpec, heightMeasureSpec);
        var childMeasuredWidth = childSize.measuredWidth;
        var childMeasuredHeight = childSize.measuredHeight;
        this.updateMinColumnStarValueIfNeeded(measureSpec, childMeasuredWidth);
        if (measureSpec.autoRowsCount > 0) {
            var remainingSpace = childMeasuredHeight;
            for (var i = rowIndex; i < rowSpanEnd; i++) {
                var rowGroup = this.rows[i];
                remainingSpace -= rowGroup.length;
            }
            if (remainingSpace > 0) {
                growSize = remainingSpace / measureSpec.autoRowsCount;
                for (var i = rowIndex; i < rowSpanEnd; i++) {
                    var rowGroup = this.rows[i];
                    if (rowGroup.getIsAuto()) {
                        rowGroup.length += growSize;
                    }
                }
            }
        }
        this.itemMeasured(measureSpec, false);
    };
    MeasureHelper.prototype.measureChildFixedRows = function (measureSpec) {
        var columnIndex = measureSpec.getColumnIndex();
        var columnSpanEnd = columnIndex + measureSpec.getColumnSpan();
        var rowIndex = measureSpec.getRowIndex();
        var rowSpanEnd = rowIndex + measureSpec.getRowSpan();
        var measureHeight = 0;
        for (var i = rowIndex; i < rowSpanEnd; i++) {
            var rowGroup = this.rows[i];
            measureHeight += rowGroup.length;
        }
        var widthMeasureSpec = (measureSpec.autoColumnsCount > 0) ? this.infinity : utils.layout.makeMeasureSpec(measureSpec.pixelWidth, utils.layout.EXACTLY);
        var heightMeasureSpec = utils.layout.makeMeasureSpec(measureHeight, this.stretchedVertically ? utils.layout.EXACTLY : utils.layout.AT_MOST);
        var childSize = view_1.View.measureChild(null, measureSpec.child, widthMeasureSpec, heightMeasureSpec);
        var childMeasuredWidth = childSize.measuredWidth;
        var childMeasuredHeight = childSize.measuredHeight;
        var remainingSpace = 0;
        var growSize = 0;
        if (measureSpec.autoColumnsCount > 0) {
            remainingSpace = childMeasuredWidth;
            for (var i = columnIndex; i < columnSpanEnd; i++) {
                var columnGroup = this.columns[i];
                remainingSpace -= columnGroup.length;
            }
            if (remainingSpace > 0) {
                growSize = remainingSpace / measureSpec.autoColumnsCount;
                for (var i = columnIndex; i < columnSpanEnd; i++) {
                    var columnGroup = this.columns[i];
                    if (columnGroup.getIsAuto()) {
                        columnGroup.length += growSize;
                    }
                }
            }
        }
        this.updateMinRowStarValueIfNeeded(measureSpec, childMeasuredHeight);
        this.itemMeasured(measureSpec, false);
    };
    MeasureHelper.prototype.measureChildFixedColumnsAndRows = function (measureSpec) {
        var columnIndex = measureSpec.getColumnIndex();
        var columnSpanEnd = columnIndex + measureSpec.getColumnSpan();
        var rowIndex = measureSpec.getRowIndex();
        var rowSpanEnd = rowIndex + measureSpec.getRowSpan();
        var measureWidth = 0;
        for (var i = columnIndex; i < columnSpanEnd; i++) {
            var columnGroup = this.columns[i];
            measureWidth += columnGroup.length;
        }
        var measureHeight = 0;
        for (var i = rowIndex; i < rowSpanEnd; i++) {
            var rowGroup = this.rows[i];
            measureHeight += rowGroup.length;
        }
        var widthMeasureSpec = utils.layout.makeMeasureSpec(measureWidth, (measureSpec.starColumnsCount > 0 && !this.stretchedHorizontally) ? utils.layout.AT_MOST : utils.layout.EXACTLY);
        var heightMeasureSpec = utils.layout.makeMeasureSpec(measureHeight, (measureSpec.starRowsCount > 0 && !this.stretchedVertically) ? utils.layout.AT_MOST : utils.layout.EXACTLY);
        var childSize = view_1.View.measureChild(null, measureSpec.child, widthMeasureSpec, heightMeasureSpec);
        var childMeasuredWidth = childSize.measuredWidth;
        var childMeasuredHeight = childSize.measuredHeight;
        this.updateMinColumnStarValueIfNeeded(measureSpec, childMeasuredWidth);
        this.updateMinRowStarValueIfNeeded(measureSpec, childMeasuredHeight);
        this.itemMeasured(measureSpec, false);
    };
    MeasureHelper.prototype.updateMinRowStarValueIfNeeded = function (measureSpec, childMeasuredHeight) {
        if (!this.stretchedVertically && measureSpec.starRowsCount > 0) {
            var remainingSpace = childMeasuredHeight;
            var rowIndex = measureSpec.getRowIndex();
            var rowSpanEnd = rowIndex + measureSpec.getRowSpan();
            for (var i = rowIndex; i < rowSpanEnd; i++) {
                var rowGroup = this.rows[i];
                if (!rowGroup.getIsStar()) {
                    remainingSpace -= rowGroup.length;
                }
            }
            if (remainingSpace > 0) {
                this.minRowStarValue = Math.max(remainingSpace / measureSpec.starRowsCount, this.minRowStarValue);
            }
        }
    };
    MeasureHelper.prototype.updateMinColumnStarValueIfNeeded = function (measureSpec, childMeasuredWidth) {
        if (!this.stretchedHorizontally && measureSpec.starColumnsCount > 0) {
            var remainingSpace = childMeasuredWidth;
            var columnIndex = measureSpec.getColumnIndex();
            var columnSpanEnd = columnIndex + measureSpec.getColumnSpan();
            for (var i = columnIndex; i < columnSpanEnd; i++) {
                var columnGroup = this.columns[i];
                if (!columnGroup.getIsStar()) {
                    remainingSpace -= columnGroup.length;
                }
            }
            if (remainingSpace > 0) {
                this.minColumnStarValue = Math.max(remainingSpace / measureSpec.starColumnsCount, this.minColumnStarValue);
            }
        }
    };
    return MeasureHelper;
}());
