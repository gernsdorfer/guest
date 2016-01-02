import {Component, OnInit} from 'angular2/core';
import {RouteParams,ROUTER_DIRECTIVES} from 'angular2/router';

import {DrinkService} from '../../service/drink';
import {Drink} from '../../service/drink.interface';


@Component({
  selector: 'drink-detail',
  templateUrl: 'app/drink/component/detail/detail-admin.html',
  directives: [ROUTER_DIRECTIVES]
})
export class DetailComponent implements OnInit  {
  public drink: Drink;
  public submitted = false;

  constructor(private _drinkService: DrinkService,
    private _routeParams: RouteParams) {
  }
 onSubmit() {
   this.submitted = true;
 }
  ngOnInit() {
    if (!this.drink) {
      let id = +this._routeParams.get('id');
      this._drinkService.get(id).then(drink => this.drink = drink);
    }
  }
}
