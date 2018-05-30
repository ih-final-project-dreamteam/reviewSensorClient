import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


// service grabs info from watson api
@Injectable()
export class CrudService {
  constructor(private http: Http) { }
  handleError(e) {
    return Observable.throw(e.json().message);
  }

  createTrip(chosenHotel) {
      return this.http.post(`http://localhost:3000/crud/create/trip`, chosenHotel)
      .map((responseFromApi) => responseFromApi.json());
  }

  updateTrip(tripId, updates) {
    return this.http.post(`http://localhost:3000/crud/trip/update/${tripId}`, updates)
    .map((responseFromApi) => responseFromApi.json());
  }

  deleteTrip(tripId) {
    return this.http.post(`http://localhost:3000/crud/trip/delete/${tripId}`, {})
    .map((responseFromApi) => responseFromApi.json());
  }

}
