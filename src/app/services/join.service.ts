import { Injectable } from '@angular/core';
import {HttpClientModule,HttpHeaders, HttpClient} from '@angular/common/http';
import {User} from '../models/User';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class JoinService {


    constructor(private http: HttpClient) { }
    private customersUrl = 'http://localhost:8080/';

    AddUser(user : User) : Observable<User> {
      return this.http.post<User>(this.customersUrl+'toma/join',user);
    }

}
