import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
<<<<<<< HEAD
// import { Observable } from 'rxjs/Rx';
=======
import { Observable } from 'rxjs/rx';
>>>>>>> f14d49441f94d2eec0d9b7d7ed6e3c95d7fec5ba
// import { Observable } from 'rxjs/Observable';
// ^this doesn't give me nice errors
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';


@Injectable()

export class AuthService {

  currentUser: any;

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`http://localhost:3000/api/signup`, user, { withCredentials: true })
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    console.log(user);
    return this.http.post(`http://localhost:3000/api/login`, user, { withCredentials: true })
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`http://localhost:3000/api/logout`, {})
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`http://localhost:3000/api/loggedin`, { withCredentials: true })
      .map(res => {
        this.currentUser = res;
        console.log('user in the service is:', res );
        res.json();
        })
      .catch(this.handleError);
  }

  getPrivateData() {
    return this.http.get(`http://localhost:3000/api/private`, { withCredentials: true })
      .map(res => res.json())
      .catch(this.handleError);
  }
}
