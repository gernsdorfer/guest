System.register(['angular2/core', 'angular2/router', '../../service/meal'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, meal_1;
    var DetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (meal_1_1) {
                meal_1 = meal_1_1;
            }],
        execute: function() {
            DetailComponent = (function () {
                function DetailComponent(_drinkService, _routeParams) {
                    this._drinkService = _drinkService;
                    this._routeParams = _routeParams;
                    this.submitted = false;
                }
                DetailComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                };
                DetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this.meal) {
                        var id = +this._routeParams.get('id');
                        this._drinkService.get(id).then(function (meal) { return _this.meal = meal; });
                    }
                };
                DetailComponent = __decorate([
                    core_1.Component({
                        selector: 'drink-detail',
                        templateUrl: 'src/meal/component/detail/detail-admin.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [meal_1.MealService, router_1.RouteParams])
                ], DetailComponent);
                return DetailComponent;
            })();
            exports_1("DetailComponent", DetailComponent);
        }
    }
});
