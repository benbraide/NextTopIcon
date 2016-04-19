<?php $form_btn_text = "Sign up"; $form_url = "api/users" ?>

@section("form-caption", "Sign up")

@section("form-extra")

    <div class="row form-group">
        {!! Form::label('password_confirmation', 'Confirm Password', array('class' => 'nti-label')) !!}
        <div class="nti-input">
            {!! Form::password('password_confirmation', array('class' => 'form-control', 'placeholder' => 'Enter password')) !!}
        </div>
    </div>

    <div class="row form-group">
        {!! Form::label('sex', 'I am a', array('class' => 'nti-label')) !!}
        <div class="nti-input">
            <select id="sex" name="sex" class="form-control c-select">
                <option value="1">Male</option>
                <option value="0">Female</option>
            </select>
        </div>
    </div>

@stop

@section("form-footer")

    <div class="row">
        <div class="nti-single">
            <a href="signin">Sign in</a>&nbsp;if you already have an account
        </div>
    </div>

@stop

<?php $no_form_password = false; $register = true ?>

@include("tmpl.partials.form")