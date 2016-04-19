/**
 * Created by benbraide on 4/18/2016.
 */

import {Component, ElementRef, Input, AfterViewInit} from "angular2/core";

import {ImageDirective} from "../directives/image.directive";

declare var jQuery: any;

@Component({
    selector: "nti-intro",
    templateUrl: "/tmpl/partials/intro",
    styleUrls: ["app/css/intro.css"],
    directives: [ImageDirective]
})
export class IntroComponent implements AfterViewInit {
    constructor(private _element: ElementRef) {}

    ngAfterViewInit() {
        jQuery(this._element.nativeElement).find("#nti-carousel").carousel();
    }
}