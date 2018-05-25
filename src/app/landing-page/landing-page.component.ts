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

  constructor(private myService: YelpService, public dataService: DataService,
    private router: Router, private myAuth: AuthService
  ) { }

  ngOnInit() {
    // THIS SHOULD BE ADDED TO EVERY COMPONENT WE WANT TO MAKE PRIVATE. IT SHOULD NOT BE IN PUBLIC COMPONENTS.
    this.myAuth.isLoggedIn()
    .then( () => {
      this.user = this.myAuth.currentUser;
      if (this.user === null) {
        this.router.navigate(['/login']);
      }
      // console.log('user in landing: ', this.user);
    } )
    .catch( err =>  {
      console.log('err in landing ======= : ', err);
      this.router.navigate(['/login']);
     });

  }

  refresh(): void {
    window.location.reload();
  }

  logout() {
    this.myAuth.logout()
    .subscribe(
    () => {this.user = null;
      this.formInfo = {};
    },
    (err) => this.error = err
  );
  }

  goToHotelList() {
    this.dataService.dataFromService = this.searchTerm;
      this.router.navigate(['/hotel-list']);
  }

}