import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
allUserTrips: Array<any> = [];
user: any;
showForm: boolean;
formInfo: any = {tripName: '', startDate: Date, endDate: Date, tripNotes: ''};
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
    this.formInfo.tripName = selectedTrip.tripName;
    console.log(selectedTrip);
    console.log(selectedTrip.startDate);
    this.formInfo.startDate = new Date(selectedTrip.startDate);
    this.formInfo.endDate = selectedTrip.endDate;
    this.formInfo.tripNotes = selectedTrip.tripNotes;
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
