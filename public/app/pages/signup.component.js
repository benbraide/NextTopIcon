/**
 * Created by benbraide on 4/19/2016.
 */
System.register(["angular2/core", 'angular2/router', "../components/title.component"], function(exports_1) {
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
    var core_1, router_1, title_component_1;
    var SignupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (title_component_1_1) {
                title_component_1 = title_component_1_1;
            }],
        execute: function() {
            SignupComponent = (function () {
                function SignupComponent() {
                }
                SignupComponent.prototype.ngOnInit = function () { };
                SignupComponent = __decorate([
                    core_1.Component({
                        selector: "nti-signup",
                        templateUrl: "/tmpl/pages/signup",
                        styleUrls: ["app/css/form.css"],
                        directives: [router_1.RouterLink, title_component_1.TitleComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SignupComponent);
                return SignupComponent;
            })();
            exports_1("SignupComponent", SignupComponent);
        }
    }
});
//# sourceMappingURL=signup.component.js.map