import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ListComponent} from '../list/list-admin';
import {DetailComponent} from '../detail/detail-admin';
import {MealService} from '../../service/meal';

@Component({
  selector: 'my-app',
  templateUrl: 'src/drink/component/app/app-admin.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [MealService]

})

@RouteConfig([
  {
    path: '/',
    name: 'List',
    component: ListComponent,
    useAsDefault: true
  },
  {
    path: '/:id',
    name: 'Detail',
    component: DetailComponent
  }
])

export class AppComponent {
  constructor () {

  }
}
