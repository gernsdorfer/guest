import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ListComponent} from '../list/list-admin';
import {DetailComponent} from '../detail/detail-admin';
import {DrinkService} from '../../service/drink';

@Component({
  selector: 'my-app',
  templateUrl: 'src/drink/component/app/app-admin.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [DrinkService]

})

@RouteConfig([
  {
    path: '',
    name: 'List',
    component: ListComponent,
    useAsDefault: true
  },
  {
    path: '/:id',
    name: 'Detail',
    component: DetailComponent
  },
  {
    path: '/create',
    name: 'Create',
    component: DetailComponent
  }
])

export class AppComponent {
  constructor () {

  }
}
