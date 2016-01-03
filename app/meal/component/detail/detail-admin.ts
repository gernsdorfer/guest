import {Component, OnInit} from 'angular2/core';
import {RouteParams,ROUTER_DIRECTIVES} from 'angular2/router';

import {MealService} from '../../service/meal';
import {Meal} from '../../service/meal.interface';


@Component({
  selector: 'drink-detail',
  templateUrl: 'app/meal/component/detail/detail-admin.html',
  directives: [ROUTER_DIRECTIVES]
})
export class DetailComponent implements OnInit  {
  public meal: Meal;
  public submitted = false;

  constructor(private _drinkService: MealService,
    private _routeParams: RouteParams) {
  }
 onSubmit() {
   this.submitted = true;
 }
  ngOnInit() {
    if (!this.meal) {
      let id = +this._routeParams.get('id');
      this._drinkService.get(id).then(meal => this.meal = meal);
    }
  }
}
