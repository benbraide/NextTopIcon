<div class="nti-nav-wrapper">
    <nav class="nti-desktop-top-nav-base">
        <div class="nti-desktop-top-nav">
            <div class="nti-desktop-nav-logo">
                <div class="navbar-header nti-text-logo-container">
                    <a [routerLink]="['Home']" class="nti-text-logo">AIL</a>
                </div>
            </div>
            <div class="nti-desktop-search-bar">
                {!! Form::open(array("url" => "#", "class" => "nti-desktop-search-bar-form")) !!}
                <div class="form-group">
                    <input type="search" name="query" class="nti-navbar-form-input" placeholder="Search">
                    <button type="submit" class="nti-navbar-form-icon" title="Search">
                        <nti-icon [value]="'search'" class="nti-nav-icon"></nti-icon>
                    </button>
                </div>
                {!! Form::close() !!}
            </div>
            <div class="nti-nav-links">
                <a href="#" class="nti-nav-link-pill">
                    <nti-icon [value]="'user-plus'">Sign Up</nti-icon>
                </a>
                <a href="#" class="nti-nav-link-pill">
                    <nti-icon [value]="'sign-in'">Sign In</nti-icon>
                </a>
            </div>
        </div>
    </nav>

    <nav class="nti-navbar">
        <div class="nti-desktop-bottom-nav-links">
            @yield("desktop-nav-links")
        </div>

        <div class="nti-desktop-bottom-nav-profile"></div>
    </nav>
</div>