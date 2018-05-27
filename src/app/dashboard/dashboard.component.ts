import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
allUserTrips: Array<any> = [];
user: any;
  constructor(private myService: AuthService) {  }

  ngOnInit() {
      this.user = this.myService.currentUser; 
        this.myService.getPrivateData(this.user._id)
        .subscribe(listOfUserTrips => {
          this.allUserTrips = listOfUserTrips;
        })
  }

}
