/**
 * Created by benbraide on 4/18/2016.
 */

import {Component, Input} from "angular2/core";
import {RouterLink} from 'angular2/router';

import {IconComponent} from "../components/icon.component";

@Component({
    selector: "nti-navbar",
    templateUrl: "/tmpl/partials/navbar",
    directives: [RouterLink, IconComponent]
})
export class NavbarComponent{}