import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
allUserTrips: Array<any> = [];
user: any;
error: any;
showForm: boolean;
formInfo: any = {tripName: '', startDate: '', endDate: '', tripNotes: ''};
selectedTrip: {};

  constructor(private router: Router, private authService: AuthService,
    private crudService: CrudService) { this.showForm = false; }

  ngOnInit() {

    this.authService.isLoggedIn()
    .then( () => {
      this.user = this.authService.currentUser;
      if (this.user === null) {
        this.router.navigate(['/login']);
      } else {
        this.getUserTrips();
      }
    })
    .catch( err =>  {
      console.log('error in dashboard component =======> ', err);
    });

    this.user = this.authService.currentUser;

  }


  getUserTrips() {
    this.authService.getPrivateData(this.user._id)
    .subscribe(listOfUserTrips => {
      this.allUserTrips = listOfUserTrips;
    });
  }

  showEditForm(selectedTrip) {
    this.selectedTrip = selectedTrip;
    this.showForm = !this.showForm;
  }

  updateTrip(selectedTrip) {
    this.showForm = !this.showForm;
    this.crudService.updateTrip(selectedTrip._id, this.formInfo)
    .subscribe(() => {
      this.getUserTrips();
      this.formInfo = {};
    });
  }

  deleteTrip(selectedTrip) {
    this.selectedTrip = selectedTrip;
    this.crudService.deleteTrip(selectedTrip._id)
    .subscribe(() => {
      this.getUserTrips();
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
