import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/restaurant-admin/component/dashboard/dashboard.html',
  styleUrls: ['app/restaurant-admin/component/dashboard/dashboard.css'],
  directives: [ROUTER_DIRECTIVES]
})


export class DashboardComponent {
  constructor () {
  }
}
