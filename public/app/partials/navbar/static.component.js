/**
 * Created by benbraide on 4/18/2016.
 */
System.register(["angular2/core", 'angular2/router', "../../components/icon.component"], function(exports_1) {
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
    var core_1, router_1, icon_component_1;
    var StaticNavbarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (icon_component_1_1) {
                icon_component_1 = icon_component_1_1;
            }],
        execute: function() {
            StaticNavbarComponent = (function () {
                function StaticNavbarComponent() {
                }
                StaticNavbarComponent.prototype.ngOnInit = function () { };
                StaticNavbarComponent = __decorate([
                    core_1.Component({
                        selector: "nti-static-nav",
                        templateUrl: "tmpl/navbar/static",
                        styleUrls: [],
                        directives: [router_1.RouterLink, icon_component_1.IconComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], StaticNavbarComponent);
                return StaticNavbarComponent;
            })();
            exports_1("StaticNavbarComponent", StaticNavbarComponent);
        }
    }
});
//# sourceMappingURL=static.component.js.map