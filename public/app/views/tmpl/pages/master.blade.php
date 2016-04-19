<nti-side-nav></nti-side-nav>

<div id="body">

    <div class="nti-body-overlay"></div>

    <nti-navbar></nti-navbar>

    @if(!Auth::check())
        <nti-intro></nti-intro>
    @endif

    <main class="container">
        <div class="nti-main" id="nti-main">
            <router-outlet></router-outlet>
        </div>
        <div class="nti-side" id="nti-side">
            @yield("side")
        </div>
    </main>

</div>