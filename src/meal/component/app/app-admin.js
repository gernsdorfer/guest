System.register(['angular2/core', 'angular2/router', '../list/list-admin', '../detail/detail-admin', '../../service/meal'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, list_admin_1, detail_admin_1, meal_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (list_admin_1_1) {
                list_admin_1 = list_admin_1_1;
            },
            function (detail_admin_1_1) {
                detail_admin_1 = detail_admin_1_1;
            },
            function (meal_1_1) {
                meal_1 = meal_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'src/drink/component/app/app-admin.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [meal_1.MealService]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'List',
                            component: list_admin_1.ListComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/:id',
                            name: 'Detail',
                            component: detail_admin_1.DetailComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
