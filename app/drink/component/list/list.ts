import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {DrinkService} from '../../service/drink';
import {Drink} from '../../service/drink.interface';
import {DetailComponent} from '../detail/detail';

@Component({
  selector: 'drink-list',
  templateUrl: 'app/drink/component/list/list.html',
  directives: [ROUTER_DIRECTIVES]
})

export class ListComponent implements OnInit {
  public drinkList: Drink[];

  constructor(private _drinkService: DrinkService) { }

  getDrinkList () {
    this.drinkList = [];

    this._drinkService.getList().then(Drinks => this.drinkList = Drinks);

    return this.drinkList;
  }

  ngOnInit() {
    this.drinkList = this.getDrinkList();
  }
}
