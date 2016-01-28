System.register(['angular2/core', 'angular2/platform/browser', 'angular2/router', '../../../drink/component/app/app-admin', '../../../meal/component/app/app-admin', '../dashboard/dashboard-admin'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, router_1, app_admin_1, app_admin_2, dashboard_admin_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_admin_1_1) {
                app_admin_1 = app_admin_1_1;
            },
            function (app_admin_2_1) {
                app_admin_2 = app_admin_2_1;
            },
            function (dashboard_admin_1_1) {
                dashboard_admin_1 = dashboard_admin_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router) {
                    this._router = _router;
                    this._browserTitle = new browser_1.Title();
                    this._browserTitle.setTitle('lade...');
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'src/restaurant/component/app/app-admin.html',
                        styleUrls: ['src/restaurant/component/app/app-admin.css'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_admin_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/drinks/...',
                            name: 'Drink',
                            component: app_admin_1.AppComponent
                        },
                        {
                            path: '/meals/...',
                            name: 'Meal',
                            component: app_admin_2.AppComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
