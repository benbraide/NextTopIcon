<div class="nti-navbar">
    <nav class="nti-top">
        <div class="nti-inner">
            <div class="nti-logo">
                <div class="navbar-header nti-text-logo-container">
                    <a [routerLink]="['Home']" class="nti-text-logo">AIL</a>
                </div>
            </div>
            {!! Form::open(array("url" => "#", "class" => "nti-searchbar")) !!}
                <input type="search" name="query" class="nti-input" placeholder="Search">
                <button type="submit" class="nti-search-icon" title="Search">
                    <nti-icon [value]="'search'"></nti-icon>
                </button>
            {!! Form::close() !!}
            <div class="nti-links">
                @unless(Auth::check())
                    <a href="#" class="nti-link-pill">
                        <nti-icon value="sign-in"></nti-icon>
                        <span>Sign In</span>
                    </a>
                    <a href="#" class="nti-link-pill">
                        <nti-icon value="user-plus"></nti-icon>
                        <span>Sign Up</span>
                    </a>
                @else
                    <a href="#" class="nti-link-pill">
                        @{{ alias() }}
                    </a>
                    <a href="#" class="nti-link-pill">
                        <nti-icon value="sign-out"></nti-icon>
                    </a>
                @endunless
            </div>
        </div>
    </nav>

    <nav class="nti-bottom">
        <div class="nti-inner">
            <div class="nti-desktop-bottom-nav-links">
                @yield("desktop-nav-links")
            </div>

            <div class="nti-profile-image"></div>
        </div>
    </nav>
</div>