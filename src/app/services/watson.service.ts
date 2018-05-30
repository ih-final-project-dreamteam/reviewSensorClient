import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


// service grabs info from watson api
@Injectable()
export class WatsonService {
  constructor(private http: Http) { }
  handleError(e) {
    return Observable.throw(e.json().message);
  }

getWatsonInfo(searchVal, hotelID) {
    console.log('service is called', searchVal, hotelID);
    return this.http.get(`http://localhost:3000/watson/${searchVal}/${hotelID}`, {})
    .map((responseFromApi) => responseFromApi.json());
}

}
