<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['middleware' => 'web'], function () {
    /**
     * Resource routes for component templates
     */
    Route::group(["prefix" => "tmpl"], function () {
        Route::get("/pages/master", function () {
            return view("tmpl.page.master");
        });

        Route::get("/pages/home", function () {
            return view("tmpl.page.home");
        });

        Route::get("/pages/about", function () {
            return view("tmpl.page.about");
        });

        Route::get("/pages/signup", function () {
            return view("tmpl.page.signup");
        });

        Route::get("/pages/signin", function () {
            return view("tmpl.page.signin");
        });

        Route::get("/pages/password/form", function () {
            return view("tmpl.page.password.form");
        });

        Route::get("/pages/password/reset", function () {
            return view("tmpl.page.password.reset");
        });

        Route::get("/nav/static", function () {
            return view("tmpl.nav.static");
        });

        Route::get("/nav/dynamic", function () {
            return view("tmpl.nav.dynamic");
        });

        Route::get("/pages/profile", function () {
            return view("tmpl.page.profile");
        });

        Route::get("/profile/details", function () {
            return view("tmpl.profile.details");
        });

        Route::get("/profile/summary", function () {
            return view("tmpl.profile.summary");
        });

        Route::get("/profile/privacy", function () {
            return view("tmpl.profile.privacy");
        });
    });

    /**
     * Routes for users
     */
    Route::group(["prefix" => "users"], function () {
        Route::match(array('PUT', 'PATCH'), "/{id}", array("uses" => 'UsersController@update'));
        Route::delete("/{id}", array("uses" => 'UsersController@delete'));
    });

    /**
     * Routes for JSON queries
     */
    Route::group(["prefix" => "json"], function () {
        Route::get("/user", array("uses" => 'UsersController@user'));
        Route::get("/user/id", array("uses" => 'UsersController@userId'));

        Route::get("/users", array("uses" => 'UsersController@list'));
    });

    /**
     * Routes for *api* commands
     */
    Route::group(["prefix" => "api"], function () {
        Route::match(array('PUT', 'PATCH'), "/image", array("uses" => 'UsersController@updateImage'));
        Route::delete("/image", array("uses" => 'UsersController@deleteImage'));
    });

    /**
     * Routes for password resets/retrieval
     */
    Route::group(["prefix" => "password"], function () {
        Route::get("/reset/{token?}", array("uses" => "PasswordController@getReset"));

        Route::post("/reset", array("uses" => "PasswordController@postReset"));
        Route::post("/email", array("uses" => "PasswordController@postEmail"));
    });

    /**
     * Catch every other request and send to AngularJS to handle
     */
    Route::get('{catchall}', function () {
        return view("index");
    })->where('catchall', '(.*)');
});
