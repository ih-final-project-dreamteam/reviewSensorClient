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

  constructor(private myService: YelpService, public dataService: DataService,
    private router: Router, private myAuth: AuthService
  ) { }

  ngOnInit() {
    this.myAuth.isLoggedIn()
    .toPromise()
    .then( (user) => {
      this.user = JSON.parse(this.myAuth.currentUser._body);
      console.log('user in landing: ', this.user);
    } )
    .catch( err =>  {
      console.log('err in landing : ', err);
      this.router.navigate(['/login']);
     });

  }

  refresh(): void {
    window.location.reload();
  }

  goToHotelList() {
    this.dataService.dataFromService = this.searchTerm;
      this.router.navigate(['/hotel-list']);
  }

}
