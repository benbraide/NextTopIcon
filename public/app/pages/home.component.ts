/**
 * Created by benbraide on 4/18/2016.
 */

import { Component, OnInit } from 'angular2/core';
import {Title} from 'angular2/platform/browser';

import {NavbarComponent} from "../partials/navbar.component";

@Component({
    selector: "nti-home",
    templateUrl: "/tmpl/pages/home",
    styleUrls: [],
    directives: [NavbarComponent]
})
export class HomeComponent implements OnInit {
    constructor(private _title: Title){}

    ngOnInit() {
        this._title.setTitle("Home - AIL");
    }
}