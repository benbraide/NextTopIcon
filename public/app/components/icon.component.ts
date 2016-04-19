/**
 * Created by benbraide on 4/18/2016.
 */

import {Component, Input} from "angular2/core";

@Component({
    selector: "nti-icon",
    template: `<span [class]="getClass()"></span><ng-content></ng-content>`
})
export class IconComponent {
    @Input() value: string;

    getClass(){
        return "fa fa-" + this.value;
    }
}