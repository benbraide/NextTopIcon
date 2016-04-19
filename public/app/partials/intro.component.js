/**
 * Created by benbraide on 4/18/2016.
 */
System.register(["angular2/core", "../directives/image.directive"], function(exports_1) {
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
    var core_1, image_directive_1;
    var IntroComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (image_directive_1_1) {
                image_directive_1 = image_directive_1_1;
            }],
        execute: function() {
            IntroComponent = (function () {
                function IntroComponent(_element) {
                    this._element = _element;
                }
                IntroComponent.prototype.ngAfterViewInit = function () {
                    jQuery(this._element.nativeElement).find("#nti-carousel").carousel();
                };
                IntroComponent = __decorate([
                    core_1.Component({
                        selector: "nti-intro",
                        templateUrl: "/tmpl/partials/intro",
                        styleUrls: ["app/css/intro.css"],
                        directives: [image_directive_1.ImageDirective]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], IntroComponent);
                return IntroComponent;
            })();
            exports_1("IntroComponent", IntroComponent);
        }
    }
});
//# sourceMappingURL=intro.component.js.map