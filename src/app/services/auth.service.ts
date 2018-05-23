import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/rx';
// import { Observable } from 'rxjs/Observable';
// ^this doesn't give me nice errors
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';


@Injectable()

export class AuthService {

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`http://localhost:3000/api/signup`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    console.log(user);
    return this.http.post(`http://localhost:3000/api/login`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`http://localhost:3000/api/logout`, {})
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`http://localhost:3000/api/loggedin`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getPrivateData() {
    return this.http.get(`http://localhost:3000/api/private`)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
