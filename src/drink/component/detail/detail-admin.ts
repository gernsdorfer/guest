import {Component, OnInit} from 'angular2/core';
import {RouteParams,ROUTER_DIRECTIVES} from 'angular2/router';

import {DrinkService} from '../../service/drink';
import {Drink} from '../../service/drink.interface';


@Component({
  selector: 'drink-detail',
  templateUrl: 'src/drink/component/detail/detail-admin.html',
  directives: [ROUTER_DIRECTIVES]
})
export class DetailComponent implements OnInit  {
  public drink: Drink;
  public submitted = false;
  public drinkId: number;

  constructor(private _drinkService: DrinkService,
    private _routeParams: RouteParams) {
  }
  onSubmit() {
    if(!this.drinkId) {
      this._drinkService.post(this.drink);
    }
    this.submitted = true;
  }

  loadDrinkById () {
    this._drinkService.get(this.drinkId).then(drink => this.drink = drink);
  }

ngOnInit() {
    this.drinkId = +this._routeParams.get('id');
    if(this.drinkId) {
      this.loadDrinkById();
    } else {
      this.drink ={
        name: ''
      };
    }

  }
}
