import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'dashboard',
  templateUrl: 'src/restaurant/component/dashboard/dashboard-admin.html',
  styleUrls: ['src/restaurant/component/dashboard/dashboard-admin.css'],
  directives: [ROUTER_DIRECTIVES]
})


export class DashboardComponent {
  constructor () {
  }
}
