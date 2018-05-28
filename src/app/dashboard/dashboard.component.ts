import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
allUserTrips: Array<any> = [];
user: any;
showForm: boolean;
formInfo: any = {tripName: '', startDate: '', endDate: '', tripNotes: ''};
selectedTrip: {};

  constructor(private myService: AuthService, private crudService: CrudService) { this.showForm = false; }

  ngOnInit() {
      this.user = this.myService.currentUser;
        this.getUserTrips();
  }
  getUserTrips() {
    this.myService.getPrivateData(this.user._id)
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
}
