<?php $form_btn_text = "Sign in"; $form_url = "enter" ?>

@section("form-caption", "Sign in")

@section("form-extra")

    <div class="row form-group nti-remember">
        <div class="nti-checkbox">
            <label>
                {!! Form::checkbox('remember', 'true') !!}
                Remember me
            </label>
        </div>
    </div>

@stop

@section("form-footer")

    <div class="row">
        <div class="nti-single">
            <a href="password/reset">Recover your password</a> or <a [routerLink]="['Signup']">Sign up</a>
            &nbsp;if you don't already have an account
        </div>
    </div>

@stop

<?php $no_form_password = false; $register = false ?>

@include("tmpl.partials.form")