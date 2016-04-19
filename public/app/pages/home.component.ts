/**
 * Created by benbraide on 4/18/2016.
 */

import { Component, OnInit } from 'angular2/core';

import {NavbarComponent} from "../partials/navbar.component";
import {TitleComponent} from "../components/title.component";

@Component({
    selector: "nti-home",
    templateUrl: "/tmpl/pages/home",
    styleUrls: [],
    directives: [NavbarComponent, TitleComponent]
})
export class HomeComponent implements OnInit {
    ngOnInit() {}
}