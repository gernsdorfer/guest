import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {MealService} from '../../service/meal';
import {Meal} from '../../service/meal.interface';
import {DetailComponent} from '../detail/detail-admin';

@Component({
  selector: 'drink-list',
  templateUrl: 'app/meal/component/list/list-admin.html',
  directives: [ROUTER_DIRECTIVES]
})

export class ListComponent implements OnInit {
  public mealList: Meal[];

  constructor(private _mealService: MealService) { }

  getMealList () {
    this.mealList = [];

    this._mealService.getList().then(mealList => this.mealList = mealList);

    return this.mealList;
  }

  ngOnInit() {
    this.mealList = this.getMealList();
  }
}
