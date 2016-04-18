/**
 * Created by benbraide on 4/18/2016.
 */
System.register(['angular2/platform/browser', 'rxjs/add/operator/map', 'rxjs/add/operator/catch', "./pages/master.component"], function(exports_1) {
    var browser_1, master_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (master_component_1_1) {
                master_component_1 = master_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(master_component_1.MasterComponent);
        }
    }
});
//# sourceMappingURL=main.js.map