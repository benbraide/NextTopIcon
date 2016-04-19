/**
 * Created by benbraide on 4/19/2016.
 */

import {Component, OnInit} from "angular2/core";
import {RouterLink} from 'angular2/router';

import {TitleComponent} from "../components/title.component";

@Component({
    selector: "nti-signin",
    templateUrl: "/tmpl/pages/signin",
    styleUrls: ["app/css/form.css"],
    directives: [RouterLink, TitleComponent]
})
export class SigninComponent implements OnInit {
    ngOnInit() {}
}