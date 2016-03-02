import {bootstrap}        from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {AppComponent}     from './component';
import {UserService}      from './user/service';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  UserService
]);