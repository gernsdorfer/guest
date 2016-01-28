System.register(['angular2/core', 'angular2/router', '../../service/drink'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, drink_1;
    var DetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (drink_1_1) {
                drink_1 = drink_1_1;
            }],
        execute: function() {
            DetailComponent = (function () {
                function DetailComponent(_drinkService, _routeParams) {
                    this._drinkService = _drinkService;
                    this._routeParams = _routeParams;
                    this.submitted = false;
                }
                DetailComponent.prototype.onSubmit = function () {
                    if (!this.drinkId) {
                        this._drinkService.post(this.drink);
                    }
                    this.submitted = true;
                };
                DetailComponent.prototype.loadDrinkById = function () {
                    var _this = this;
                    this._drinkService.get(this.drinkId).then(function (drink) { return _this.drink = drink; });
                };
                DetailComponent.prototype.ngOnInit = function () {
                    this.drinkId = +this._routeParams.get('id');
                    if (this.drinkId) {
                        this.loadDrinkById();
                    }
                    else {
                        this.drink = {
                            name: ''
                        };
                    }
                };
                DetailComponent = __decorate([
                    core_1.Component({
                        selector: 'drink-detail',
                        templateUrl: 'src/drink/component/detail/detail-admin.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [drink_1.DrinkService, router_1.RouteParams])
                ], DetailComponent);
                return DetailComponent;
            })();
            exports_1("DetailComponent", DetailComponent);
        }
    }
});
