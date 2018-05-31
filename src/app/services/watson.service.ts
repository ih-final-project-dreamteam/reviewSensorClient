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

getWatsonInfo(searchVal, hotel, priceVal) {
    console.log('service is called', searchVal, hotel.id);
    return this.http.post(`http://localhost:3000/watson/${searchVal}/${priceVal}/${hotel.id}`, hotel)
    .map((responseFromApi) => responseFromApi.json());
}

}
