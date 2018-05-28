import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { CrudService } from '../services/crud.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {
   selectedHotel: any;
   formInfo: any = {userId: '', tripName: '', startDate: '', endDate: '', tripNotes: '', hotel: {}};
   user: any;

  constructor(public dataService: DataService, private router: Router,
    private crudService: CrudService, private myService: AuthService) {
  }

  ngOnInit() {
   this.selectedHotel = this.dataService.dataFromService;
   this.user = this.myService.currentUser;
  }
  createTrip() {
    this.formInfo.userId = this.user._id;
    this.formInfo.hotel = this.selectedHotel;
    this.crudService.createTrip(this.formInfo)
    .subscribe(
    );
    this.router.navigate([`/dashboard/${this.user._id}`]);
  }
}
