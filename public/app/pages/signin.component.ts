/**
 * Created by benbraide on 4/19/2016.
 */

import {Component, OnInit} from "angular2/core";
import {Title} from 'angular2/platform/browser';
import {RouterLink} from 'angular2/router';

@Component({
    selector: "nti-signin",
    templateUrl: "/tmpl/pages/signin",
    styleUrls: ["app/css/form.css"],
    directives: [RouterLink]
})
export class SigninComponent implements OnInit {
    constructor(private _title: Title){}

    ngOnInit() {
        this._title.setTitle("Sign In - AIL");
    }
}