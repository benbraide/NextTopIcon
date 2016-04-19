/**
 * Created by benbraide on 4/18/2016.
 */
System.register(['angular2/core', 'angular2/router', 'angular2/http', 'angular2/platform/browser', "../partials/navbar.component", "../partials/intro.component", "./home.component", "./signup.component", "./signin.component"], function(exports_1) {
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
    var core_1, router_1, http_1, browser_1, navbar_component_1, intro_component_1, home_component_1, signup_component_1, signin_component_1;
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
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (intro_component_1_1) {
                intro_component_1 = intro_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            },
            function (signin_component_1_1) {
                signin_component_1 = signin_component_1_1;
            }],
        execute: function() {
            MasterComponent = (function () {
                function MasterComponent(_router, _element) {
                    this._router = _router;
                    this._element = _element;
                }
                MasterComponent.prototype.ngOnInit = function () { };
                MasterComponent.prototype.showIntro = function () {
                    return (this._router.isRouteActive(this._router.generate(['/Home'])));
                };
                MasterComponent = __decorate([
                    core_1.Component({
                        selector: 'nti',
                        templateUrl: '/tmpl/pages/master',
                        styleUrls: ["app/css/master.css"],
                        directives: [router_1.RouterOutlet, navbar_component_1.NavbarComponent, intro_component_1.IntroComponent, home_component_1.HomeComponent, signup_component_1.SignupComponent, signin_component_1.SigninComponent],
                        providers: [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, browser_1.Title]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Home',
                            component: home_component_1.HomeComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/signup',
                            name: 'Signup',
                            component: signup_component_1.SignupComponent
                        },
                        {
                            path: '/signin',
                            name: 'Signin',
                            component: signin_component_1.SigninComponent
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