/**
 * Created by benbraide on 4/18/2016.
 */
System.register(['angular2/core', 'angular2/router', 'angular2/http', 'angular2/platform/browser', "./home.component"], function(exports_1) {
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
    var core_1, router_1, http_1, browser_1, home_component_1;
    var MasterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            MasterComponent = (function () {
                function MasterComponent(_router, _element) {
                    this._router = _router;
                    this._element = _element;
                }
                MasterComponent.prototype.ngOnInit = function () { };
                MasterComponent = __decorate([
                    core_1.Component({
                        selector: 'nti',
                        templateUrl: 'tmpl/pages/master',
                        directives: [router_1.RouterOutlet],
                        providers: [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, browser_1.Title]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Home',
                            component: home_component_1.HomeComponent,
                            useAsDefault: true
                        }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, core_1.ElementRef])
                ], MasterComponent);
                return MasterComponent;
            })();
            exports_1("MasterComponent", MasterComponent);
        }
    }
});
//# sourceMappingURL=master.component.js.map