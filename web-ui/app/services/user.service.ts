import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from './../models/user';
@Injectable()
export class UserService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private loginUrl = 'app/login';
    private registerUrl = 'app/register';

    constructor(private http: Http) { }
    login(user: User): Promise<User[]> {
        return this.http
            .post(this.loginUrl, JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }
    register(user: User): Promise<User[]> {
        return this.http
            .post(this.registerUrl, JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}