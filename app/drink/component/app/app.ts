import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ListComponent} from '../list/list';
import {DrinkService} from '../../service/drink';

@Component({
  selector: 'my-app',
  templateUrl: 'app/drink/component/app/app.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [DrinkService]

})

@RouteConfig([
  {
    path: '/list',
    name: 'List',
    component: ListComponent,
    useAsDefault: true
  }
])

export class AppComponent {
  constructor () {

  }
}