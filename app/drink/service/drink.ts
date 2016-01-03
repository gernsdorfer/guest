import {Injectable} from 'angular2/core';
import {DrinkList} from './drink.mock';
import { Drink } from './drink.interface';

@Injectable()
export class DrinkService {
	getList() {
		return Promise.resolve(DrinkList);
	}

	get(id: number) {
    return Promise.resolve(DrinkList)
      .then(heroes => heroes.filter(h => h.id === id)[0]);
	}

	post(drink:Drink ) {
		//TODO max ID +1
		//drink.id =
		DrinkList.push(drink);
		//return max id
	}
}
