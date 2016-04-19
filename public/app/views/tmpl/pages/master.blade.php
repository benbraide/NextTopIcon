<nti-side-nav></nti-side-nav>

<div id="body">

    <div class="nti-body-overlay"></div>

    <nti-navbar></nti-navbar>

    @unless(Auth::check())
        <nti-intro *ngIf="showIntro()"></nti-intro>
    @endunless

    <main class="container">
        <div class="nti-main" id="nti-main">
            <router-outlet></router-outlet>
        </div>
        <div class="nti-side" id="nti-side">
            @yield("side")
        </div>
    </main>

</div>