import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


// service grabs info from yelp api and watson api
@Injectable()

export class YelpService {

  constructor(private http: Http) { }
  
  searchTerm: any = '';
  
  handleError(e) {
    return Observable.throw(e.json().message);
  }


  goToHotelList(searchVal) {
    this.searchTerm = searchVal;
    return this.http.get(`http://localhost:3000/yelp/${searchVal}`, {})
    .map((responseFromApi) => responseFromApi.json());
  }


}