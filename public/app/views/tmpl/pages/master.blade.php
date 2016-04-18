<nti-side-nav></nti-side-nav>

<div id="body" *ngIf="ready">

    <div class="nti-body-overlay"></div>

    <nti-navbar [loggedInUser]="loggedInUser"></nti-navbar>

    <div class="home-top">
        <div id="nti-carousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#nti-carousel" data-slide-to="0" class="active"></li>
                <li data-target="#nti-carousel" data-slide-to="1"></li>
                <li data-target="#nti-carousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <img src="images/img.jpg" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img src="images/blue-earth.jpg" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img src="images/just-do-it.jpg" alt="Third slide">
                </div>
            </div>
            <a class="left carousel-control" href="#nti-carousel" role="button" data-slide="prev">
                <span class="icon-prev" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#nti-carousel" role="button" data-slide="next">
                <span class="icon-next" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>

    <main class="container">
        <div class="nti-main" id="nti-main">
            <router-outlet></router-outlet>
        </div>
        <div class="nti-side" id="nti-side">
            @yield("side")
        </div>
    </main>

</div>