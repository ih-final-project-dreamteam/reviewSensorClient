
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


// service grabs info from yelp api
@Injectable()

export class YelpService {

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }




goToHotelList(searchVal, priceVal) {
  console.log('service price:', priceVal);
    return this.http.get(`http://localhost:3000/yelp/${searchVal}/${priceVal}`)
    .map((responseFromApi) => responseFromApi.json());
  }

} // end of service
