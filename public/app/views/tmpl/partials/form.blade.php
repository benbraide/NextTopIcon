<h2 class="nti-form-heading">@yield("form-caption")</h2>
<hr />

{!! Form::open(array('url' => $form_url, 'class' => 'nti-form')) !!}
    <div class="row form-group">
        @if($register)
            {!! Form::label('email', 'Email', array('class' => 'nti-label')) !!}
        @else
            {!! Form::label('email', 'Email or Alias', array('class' => 'nti-label')) !!}
        @endif
        <div class="nti-input">
            @if($register)
                {!! Form::email('email', null, array('class' => 'form-control', 'placeholder' => 'Enter email')) !!}
            @else
                {!! Form::text('email', null, array('class' => 'form-control', 'placeholder' => 'Enter email or alias')) !!}
            @endif
        </div>
    </div>
    
    @unless($no_form_password)
        <div class="row form-group">
            {!! Form::label('password', 'Password', array('class' => 'nti-label')) !!}
            <div class="nti-input">
                {!! Form::password('password', array('class' => 'form-control', 'placeholder' => 'Enter password')) !!}
            </div>
        </div>
    @endunless
    
    @yield("form-extra")
    
    <div class="row form-group">
        <div class="nti-submit">
            {!! Form::button($form_btn_text, array('type' => 'submit', 'class' => 'nti-plain-btn')) !!}
        </div>
    </div>
    
    @yield("form-footer")

{!! Form::close() !!}