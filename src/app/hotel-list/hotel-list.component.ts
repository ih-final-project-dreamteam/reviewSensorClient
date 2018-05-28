import { Component, OnInit, Input } from '@angular/core';
import { YelpService } from '../services/yelp.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import { WatsonService } from '../services/watson.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  allTheHotels: Array<any> = [];
  error: any;
  user: any;

  constructor(private yelpService: YelpService, private watsonService: WatsonService, public dataService: DataService,
    private _route: ActivatedRoute, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    // if page is reloaded with out search from landing page, set searchTerm to param in url
    if (this.dataService.dataFromService === undefined) {
      this._route.params.forEach(param => {
        this.dataService.dataFromService = param['searchTerm'];
      });
    }
    this.yelpService.goToHotelList(this.dataService.dataFromService)
    .subscribe((theList) => {
      this.allTheHotels = theList;
    });
  }

  logout() {
    this.authService.logout()
      .subscribe(
        () => {
          this.user = null;
        },
        (err) => this.error = err
      );
    console.log('user signed out', this.user);
    this.router.navigate(['/login']);
  }

  goToDashboard() {
    this.router.navigate([`/dashboard/${this.user._id}`]);
  }

  refresh(): void {
    window.location.reload();
  }


}


