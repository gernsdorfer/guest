import {Component} from 'angular2/core';
import {Title} from 'angular2/platform/browser';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES, RouteData} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {AppComponent as DrinkApp} from '../../../drink/component/app/app';
import {DashboardComponent} from '../dashboard/dashboard';


@Component({
  selector: 'my-app',
  templateUrl: 'app/restaurant-admin/component/app/app.html',
  styleUrls: ['app/restaurant-admin/component/app/app.css'],
  directives: [ROUTER_DIRECTIVES]
})


@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
      path: '/drinks/...',
      name: 'Drink',
      component: DrinkApp
  }

])
export class AppComponent {
  private _browserTitle = new Title ();

  constructor (private _router : Router) {
    this._browserTitle.setTitle('lade...');
  }
}
