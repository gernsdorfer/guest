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
    var ListComponent;
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
            ListComponent = (function () {
                function ListComponent(_mealService) {
                    this._mealService = _mealService;
                }
                ListComponent.prototype.getMealList = function () {
                    var _this = this;
                    this.mealList = [];
                    this._mealService.getList().then(function (mealList) { return _this.mealList = mealList; });
                    return this.mealList;
                };
                ListComponent.prototype.ngOnInit = function () {
                    this.mealList = this.getMealList();
                };
                ListComponent = __decorate([
                    core_1.Component({
                        selector: 'drink-list',
                        templateUrl: 'src/meal/component/list/list-admin.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [meal_1.MealService])
                ], ListComponent);
                return ListComponent;
            })();
            exports_1("ListComponent", ListComponent);
        }
    }
});
