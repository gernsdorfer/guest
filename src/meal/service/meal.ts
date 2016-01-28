import {Injectable} from 'angular2/core';
import {MealList} from './meal.mock';

@Injectable()
export class MealService {
	getList() {
		return Promise.resolve(MealList);
	}

	get(id: number) {
    return Promise.resolve(MealList)
      .then(heroes => heroes.filter(h => h.id === id)[0]);
	}
}
