System.register(['angular2/core', './drink.mock'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, drink_mock_1;
    var DrinkService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (drink_mock_1_1) {
                drink_mock_1 = drink_mock_1_1;
            }],
        execute: function() {
            DrinkService = (function () {
                function DrinkService() {
                }
                DrinkService.prototype.getList = function () {
                    return Promise.resolve(drink_mock_1.DrinkList);
                };
                DrinkService.prototype.get = function (id) {
                    return Promise.resolve(drink_mock_1.DrinkList)
                        .then(function (heroes) { return heroes.filter(function (h) { return h.id === id; })[0]; });
                };
                DrinkService.prototype.post = function (drink) {
                    //TODO max ID +1
                    //drink.id =
                    drink_mock_1.DrinkList.push(drink);
                    //return max id
                };
                DrinkService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DrinkService);
                return DrinkService;
            })();
            exports_1("DrinkService", DrinkService);
        }
    }
});
