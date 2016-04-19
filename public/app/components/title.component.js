/**
 * Created by benbraide on 4/19/2016.
 */
System.register(["angular2/core", 'angular2/platform/browser'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1;
    var TitleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            TitleComponent = (function () {
                function TitleComponent(_title) {
                    this._title = _title;
                }
                TitleComponent.prototype.ngOnInit = function () {
                    this._title.setTitle(this.value + " - AIL");
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TitleComponent.prototype, "value");
                TitleComponent = __decorate([
                    core_1.Component({
                        selector: "nti-title",
                        template: ""
                    }), 
                    __metadata('design:paramtypes', [browser_1.Title])
                ], TitleComponent);
                return TitleComponent;
            })();
            exports_1("TitleComponent", TitleComponent);
        }
    }
});
//# sourceMappingURL=title.component.js.map