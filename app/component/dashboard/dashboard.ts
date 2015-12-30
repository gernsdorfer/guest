import {Component} from 'angular2/core';
import {Title} from 'angular2/platform/browser';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'card',
  templateUrl: 'app/component/dashboard/dashboard.html',
  styleUrls: ['app/component/dashboard/dashboard.css'],
  directives: [ROUTER_DIRECTIVES]
})


export class DashboardComponent {
  constructor () {
    console.log('DONE');
  }
}
