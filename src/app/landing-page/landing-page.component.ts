import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { YelpService } from '../services/yelp.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  searchTerm: String = '';
  user: any;
  formInfo: any = {username: '', password: ''};
  error: any;

  constructor(private yelpService: YelpService, public dataService: DataService,
    private router: Router, private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.currentUser;
    console.log(this.user);
  }

  refresh(): void {
    window.location.reload();
  }

  goToHotelList() {
    this.dataService.dataFromService = this.searchTerm;
      this.router.navigate([`/hotel-list/${this.searchTerm}`]);
  }

}
