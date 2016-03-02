import {Component}                      from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {UsersComponent}                 from './user/list.component';
import {UserComponent}                  from './user/show.component';

@Component({
  selector    : 'sqli-app',
  styleUrls   : ['app/component.css'],
  templateUrl : 'app/component.html',
  directives  : [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/users',      name: 'Users',  component: UsersComponent,  useAsDefault: true},
  {path: '/users/:id',  name: 'User',   component: UserComponent}
])
export class AppComponent {

}