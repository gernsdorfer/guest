import {Injectable} from 'angular2/core';
import {DrinkList} from './drink.mock';

@Injectable()
export class DrinkService {
	getList() {
		return Promise.resolve(DrinkList);
	}

	get(id: number) {
    return Promise.resolve(DrinkList)
      .then(heroes => heroes.filter(h => h.id === id)[0]);
	}
}
