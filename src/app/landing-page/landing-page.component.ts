import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { YelpService } from '../services/yelp.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  searchTerm: String = '';
  constructor(private myService: YelpService, public dataService: DataService,
    private router: Router) { }

  ngOnInit() {
  }
  goToHotelList() {
    this.dataService.dataFromService = this.searchTerm;
      this.router.navigate([`/hotel-list/${this.searchTerm}`]);
  }

}
