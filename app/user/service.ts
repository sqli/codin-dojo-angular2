import {Injectable} from 'angular2/core';
import {USERS}      from './mock';

@Injectable()
export class UserService {

    findAll() {
        return Promise.resolve(USERS);
    }

    get(id: number) {
        return Promise.resolve(USERS).then(
                users => users.filter(user => user.id === id)[0]
        );
    }

}