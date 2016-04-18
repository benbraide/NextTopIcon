/**
 * Created by benbraide on 4/18/2016.
 */

import {Component, ElementRef, OnInit} from 'angular2/core';
import {RouteConfig, Router, RouterOutlet, ROUTER_PROVIDERS} from 'angular2/router';

import {HTTP_PROVIDERS} from 'angular2/http'
import {Title} from 'angular2/platform/browser';

import {HomeComponent} from "./home.component";

@Component({
    selector: 'nti',
    templateUrl: 'tmpl/pages/master',
    directives: [RouterOutlet],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, Title]
})
@RouteConfig([
    {
        path: '/',
        name: 'Home',
        component: HomeComponent,
        useAsDefault: true
    }
])
export class MasterComponent implements OnInit {
    constructor(private _router: Router, private _element: ElementRef){}

    ngOnInit() {}
}