/**
 * Created by benbraide on 4/18/2016.
 */

import {Component, Input} from "angular2/core";

import {StaticNavbarComponent} from "./navbar/static.component";

@Component({
    selector: "nti-navbar",
    template: `
            <nti-static-nav></nti-static-nav>
    `,
    directives: [StaticNavbarComponent]
})
export class NavbarComponent{}