import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';
import { BaseApi } from '../core/base-api';

@Injectable()
export class UsersService extends BaseApi {
    constructor(public http: HttpClient){
        super(http);
    }

    // getUserByEmail(email: string){
    //     return this.http.get(`http://localhost:3000/users?email=${email}`)
    //     .pipe(map((response: Response)=>{return response}))
    //     .pipe(map((user) => {return user[0] ? user[0] : undefined}))
    // }

    getUserByEmail(email: string){
        return this.get(`users?email=${email}`)
        .pipe(map((user) => {return user[0] ? user[0] : undefined}))
    }

    createNewUser(user: User){
        return this.post('users', user);
    }
}