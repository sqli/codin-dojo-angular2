import {Component, OnInit}  from 'angular2/core';
import {ROUTER_DIRECTIVES}  from 'angular2/router';

import {User}               from './model';
import {UserService}        from './service';

@Component({
  selector    : 'sqli-users',
  styleUrls   : ['app/user/list.css'],
  templateUrl : 'app/user/list.html',
  directives  : [ROUTER_DIRECTIVES]
})
export class UsersComponent {

  public users: User[];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.findAll().then(users => this.users = users);
  }

}