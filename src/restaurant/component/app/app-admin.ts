import {Component} from 'angular2/core';
import {Title} from 'angular2/platform/browser';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES, RouteData} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {AppComponent as DrinkApp} from '../../../drink/component/app/app-admin';
import {AppComponent as MealApp} from '../../../meal/component/app/app-admin';
import {DashboardComponent} from '../dashboard/dashboard-admin';


@Component({
  selector: 'my-app',
  templateUrl: 'src/restaurant/component/app/app-admin.html',
  styleUrls: ['src/restaurant/component/app/app-admin.css'],
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
  },
  {
      path: '/meals/...',
      name: 'Meal',
      component: MealApp
  }

])
export class AppComponent {
  private _browserTitle = new Title ();

  constructor (private _router : Router) {
    this._browserTitle.setTitle('lade...');
  }
}
