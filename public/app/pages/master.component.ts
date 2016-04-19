/**
 * Created by benbraide on 4/18/2016.
 */

import {Component, ElementRef, OnInit} from 'angular2/core';
import {RouteConfig, Router, RouterOutlet, ROUTER_PROVIDERS} from 'angular2/router';

import {HTTP_PROVIDERS} from 'angular2/http'
import {Title} from 'angular2/platform/browser';

import {NavbarComponent} from "../partials/navbar.component";
import {IntroComponent} from "../partials/intro.component";

import {HomeComponent} from "./home.component";
import {SignupComponent} from "./signup.component";

@Component({
    selector: 'nti',
    templateUrl: '/tmpl/pages/master',
    styleUrls: ["app/css/master.css"],
    directives: [RouterOutlet, NavbarComponent, IntroComponent, HomeComponent, SignupComponent],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, Title]
})
@RouteConfig([
    {
        path: '/',
        name: 'Home',
        component: HomeComponent,
        useAsDefault: true
    },
    {
        path: '/signup',
        name: 'Signup',
        component: SignupComponent
    }
])
export class MasterComponent implements OnInit {
    constructor(private _router: Router, private _element: ElementRef){}

    ngOnInit() {}

    showIntro() {
        return (this._router.isRouteActive(this._router.generate(['/Home'])));
    }
}