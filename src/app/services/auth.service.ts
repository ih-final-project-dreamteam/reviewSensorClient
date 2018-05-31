import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { environment } from '../../environments/environment';
@Injectable()

export class AuthService {
  temporaryUser: any;
  currentUser: any;
  baseUrl: string = environment.apiUrl;

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`${this.baseUrl}/api/signup`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`${this.baseUrl}/api/login`, user, { withCredentials: true })
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.delete(`${this.baseUrl}/api/logout`, { withCredentials: true })
      .map(res => {
        this.currentUser = null;
        res.json();
      })
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${this.baseUrl}/api/loggedin`, { withCredentials: true })
    .toPromise()
      .then(res => {
        // this.currentUser = res;
        this.temporaryUser = res;
        console.log('temporaryUser is: ', this.temporaryUser);
        this.currentUser = JSON.parse(this.temporaryUser._body);
        console.log('user in the service is:', this.currentUser );
        res.json();
        })
      .catch( err => {
        this.currentUser = null;
        console.log('Error on isLoggedIn function:', err);
      });
  }

  getPrivateData(userId) {
    return this.http.get(`${this.baseUrl}/api/dashboard/${userId}`)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
