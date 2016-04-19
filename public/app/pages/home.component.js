/**
 * Created by benbraide on 4/18/2016.
 */
System.register(['angular2/core', 'angular2/platform/browser', "../partials/navbar.component"], function(exports_1) {
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
    var core_1, browser_1, navbar_component_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_title) {
                    this._title = _title;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    this._title.setTitle("Home - AIL");
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: "nti-home",
                        templateUrl: "/tmpl/pages/home",
                        styleUrls: [],
                        directives: [navbar_component_1.NavbarComponent]
                    }), 
                    __metadata('design:paramtypes', [browser_1.Title])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map