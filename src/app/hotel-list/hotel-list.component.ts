import { Component, OnInit, Input } from '@angular/core';
import { YelpService } from '../services/yelp.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  allTheHotels: Array<any> = [];

  constructor(private myService: YelpService, public dataService: DataService,
  private router: Router) {
  }

  ngOnInit() {
    if (this.dataService.dataFromService === undefined) {
      this.dataService.dataFromService = 'Miami';
    }
    this.myService.goToHotelList(this.dataService.dataFromService)
    .subscribe((theList) => {
      this.allTheHotels = theList;
      console.log(this.allTheHotels);
    });
  }
}



