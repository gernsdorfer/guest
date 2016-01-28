System.register(['angular2/platform/browser', 'angular2/router', './component/app/app-admin'], function(exports_1) {
    var browser_1, router_1, app_admin_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_admin_1_1) {
                app_admin_1 = app_admin_1_1;
            }],
        execute: function() {
            //
            browser_1.bootstrap(app_admin_1.AppComponent, [
                router_1.ROUTER_PROVIDERS
            ]);
        }
    }
});
