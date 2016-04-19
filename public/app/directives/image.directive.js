/**
 * Created by benbraide on 4/19/2016.
 */
System.register(["angular2/core"], function(exports_1) {
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
    var core_1;
    var ImageDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ImageDirective = (function () {
                function ImageDirective(_element) {
                    this._element = _element;
                    this._boundHandler = this.handler.bind(this);
                    this._boundResize = this.resize.bind(this);
                }
                ImageDirective.prototype.ngOnInit = function () {
                    jQuery(window).resize(this._boundHandler);
                };
                ImageDirective.prototype.ngOnDestroy = function () {
                    if (typeof this._timerHandle !== "undefined") {
                        clearTimeout(this._timerHandle);
                    }
                    jQuery(window).off("resize", this._boundHandler);
                };
                ImageDirective.prototype.ngOnChanges = function (changes) {
                    if (changes.details && changes.details.currentValue) {
                        this.resize();
                    }
                };
                ImageDirective.prototype.handler = function () {
                    if (typeof this._timerHandle !== "undefined") {
                        clearTimeout(this._timerHandle);
                    }
                    this._timerHandle = setTimeout(this._boundResize, 500);
                };
                ImageDirective.prototype.resize = function () {
                    if (!this.details) {
                        return;
                    }
                    var el = jQuery(this._element.nativeElement);
                    var target = el.parent();
                    var targetWidth = parseInt(target.width());
                    var targetHeight = parseInt(target.height());
                    var adjustedImageWidth = targetWidth;
                    var adjustedImageHeight = (this.details.height * adjustedImageWidth) / this.details.width;
                    if (adjustedImageHeight < targetHeight) {
                        adjustedImageHeight = targetHeight;
                        adjustedImageWidth = (adjustedImageHeight * this.details.width) / this.details.height;
                    }
                    var imageWidthDelta = this.details.x + (this.details.width - adjustedImageWidth);
                    if (imageWidthDelta > 0 || adjustedImageWidth == targetWidth) {
                        imageWidthDelta = 0;
                    }
                    el.width(adjustedImageWidth);
                    el.height(adjustedImageHeight);
                    el.css("margin-left", imageWidthDelta);
                    var imageHeightWithOffset = adjustedImageHeight + this.details.y;
                    if (imageHeightWithOffset < targetHeight) {
                        el.css("margin-top", this.details.y + (targetHeight - imageHeightWithOffset));
                    }
                    else {
                        el.css("margin-top", this.details.y);
                    }
                };
                __decorate([
                    core_1.Input("nti-image"), 
                    __metadata('design:type', Object)
                ], ImageDirective.prototype, "details");
                ImageDirective = __decorate([
                    core_1.Directive({
                        selector: "[nti-image]"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], ImageDirective);
                return ImageDirective;
            })();
            exports_1("ImageDirective", ImageDirective);
        }
    }
});
//# sourceMappingURL=image.directive.js.map