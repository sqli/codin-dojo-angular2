import {Component, OnInit}              from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';

import {User}                           from './model';
import {UserService}                    from './service';

@Component({
  selector    : 'sqli-user',
  styleUrls   : ['app/user/show.css'],
  templateUrl : 'app/user/show.html',
  directives  : [ROUTER_DIRECTIVES]
})
export class UserComponent {

  public user: User;

  constructor(private _userService: UserService, private _routeParams: RouteParams) { }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._userService.get(id).then(user => this.user = user);
  }

}