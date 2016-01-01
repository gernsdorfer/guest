import {Component, OnInit} from 'angular2/core';
import {Title} from 'angular2/platform/browser';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {DrinkService} from '../../service/drink';
import {Drink} from '../../service/drink.interface';

@Component({
  selector: 'card-list',
  templateUrl: 'app/card/component/list/list.html',
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
