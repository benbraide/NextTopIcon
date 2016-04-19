<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="<?= csrf_token() ?>" />

    <title></title>

    <base href="/">
</head>
<body>

<nti>Loading...</nti>

<script>
    NtiGlobalObjects = {
        csrf: "{!! csrf_token() !!}",
        loggedInUserId: {!! $loggedInUserId ?: "null" !!}
    }

    console.log(NtiGlobalObjects);
</script>

<!-- 1. Load libraries -->
<!-- IE required polyfills, in this exact order -->
<script src="/node_modules/es6-shim/es6-shim.min.js"></script>
<script src="/node_modules/systemjs/dist/system-polyfills.js"></script>
<script src="/node_modules/angular2/es6/dev/src/testing/shims_for_IE.js"></script>

<script src="/node_modules/angular2/bundles/angular2-polyfills.js"></script>
<script src="/node_modules/systemjs/dist/system.src.js"></script>
<script src="/node_modules/rxjs/bundles/Rx.js"></script>
<script src="/node_modules/angular2/bundles/angular2.dev.js"></script>
<script src="/node_modules/angular2/bundles/router.dev.js"></script>
<script src="/node_modules/angular2/bundles/http.dev.js"></script>

<script src="/app/js/jquery-2.2.3.min.js"></script>
<script src="/app/js/tether.min.js"></script>
<script src="/app/js/bootstrap.min.js"></script>

<!-- 2. Configure SystemJS -->
<script>
    System.config({
        packages: {
            app: {
                format: 'register',
                defaultExtension: 'js'
            }
        }
    });

    System.import('app/main').then(null, console.error.bind(console));
</script>

</body>
</html>
