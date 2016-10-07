var core_1 = require("@angular/core");
var link_1 = require("./../link");
var menuLinks = [
    new link_1.Link("Fetch Get", "/fetchGetExampleComponent"),
    new link_1.Link("Fetch Post", "/fetchPostExampleComponent")
];
var FetchExamplesComponent = (function () {
    function FetchExamplesComponent() {
        this.links = [];
        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
    FetchExamplesComponent = __decorate([
        core_1.Component({
            selector: 'connectivity-component',
            templateUrl: 'examples-list.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], FetchExamplesComponent);
    return FetchExamplesComponent;
}());
exports.FetchExamplesComponent = FetchExamplesComponent;
//# sourceMappingURL=fetch-examples.component.js.map