/**
 * Created by benbraide on 4/19/2016.
 */

import {Component, OnInit} from "angular2/core";
import {Title} from 'angular2/platform/browser';

@Component({
    selector: "nti-signup",
    templateUrl: "/tmpl/pages/signup",
    styleUrls: ["app/css/form.css"],
    directives: []
})
export class SignupComponent implements OnInit {
    constructor(private _title: Title){}

    ngOnInit() {
        this._title.setTitle("Sign Up - AIL");
    }
}