/**
 * Created by benbraide on 4/19/2016.
 */

import {Component, Directive, ElementRef, OnInit, OnDestroy, OnChanges, Input} from "angular2/core";

declare var jQuery: any;

@Directive({
    selector: "[nti-image]"
})
export class ImageDirective implements OnInit, OnDestroy, OnChanges {
    private _timerHandle: any;
    private _boundHandler: any;
    private _boundResize: any;

    @Input("nti-image") details: any;

    constructor(private _element: ElementRef){
        this._boundHandler = this.handler.bind(this);
        this._boundResize = this.resize.bind(this);
    }

    ngOnInit(){
        jQuery(window).resize(this._boundHandler);
    }

    ngOnDestroy(){
        if (typeof this._timerHandle !== "undefined"){
            clearTimeout(this._timerHandle);
        }

        jQuery(window).off("resize", this._boundHandler);
    }

    ngOnChanges(changes: any){
        if (changes.details && changes.details.currentValue){
            this.resize();
        }
    }

    handler(){
        if (typeof this._timerHandle !== "undefined"){
            clearTimeout(this._timerHandle);
        }

        this._timerHandle = setTimeout(this._boundResize, 500);
    }

    resize(){
        if (!this.details){
            return;
        }

        let el: any = jQuery(this._element.nativeElement);
        let target: any = el.parent();

        let targetWidth: number = parseInt(target.width());
        let targetHeight: number = parseInt(target.height());

        var adjustedImageWidth = targetWidth;
        var adjustedImageHeight = (this.details.height * adjustedImageWidth) / this.details.width;

        if (adjustedImageHeight < targetHeight){
            adjustedImageHeight = targetHeight;
            adjustedImageWidth = (adjustedImageHeight * this.details.width) / this.details.height;
        }

        var imageWidthDelta = this.details.x + (this.details.width - adjustedImageWidth);

        if (imageWidthDelta > 0 || adjustedImageWidth == targetWidth){
            imageWidthDelta = 0;
        }

        el.width(adjustedImageWidth);
        el.height(adjustedImageHeight);

        el.css("margin-left", imageWidthDelta);

        var imageHeightWithOffset = adjustedImageHeight + this.details.y;
        if (imageHeightWithOffset < targetHeight){
            el.css("margin-top", this.details.y + (targetHeight - imageHeightWithOffset));
        }
        else{
            el.css("margin-top", this.details.y);
        }
    }
}