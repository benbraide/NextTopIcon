/**
 * Created by benbraide on 4/18/2016.
 */

import {Component, OnInit} from "angular2/core";
import {RouterLink} from 'angular2/router';

import {IconComponent} from "../../components/icon.component";

@Component({
    selector: "nti-static-nav",
    templateUrl: "tmpl/navbar/static",
    styleUrls: [],
    directives: [RouterLink, IconComponent]
})
export class StaticNavbarComponent implements OnInit {
    constructor(){}

    ngOnInit() {}
}