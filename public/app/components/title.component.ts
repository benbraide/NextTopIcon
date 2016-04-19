/**
 * Created by benbraide on 4/19/2016.
 */

import {Component, Input, OnInit} from "angular2/core";
import {Title} from 'angular2/platform/browser';

@Component({
    selector: "nti-title",
    template: ""
})
export class TitleComponent implements OnInit {
    @Input() value: string;

    constructor(private _title: Title){}

    ngOnInit() {
        this._title.setTitle(this.value + " - AIL");
    }
}