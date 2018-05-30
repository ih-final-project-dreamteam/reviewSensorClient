import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WatsonService } from '../services/watson.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { YelpService } from '../services/yelp.service';
import { MaterialModule } from '../material.module';



@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
  @Input() oneSingleHotel: any;
  theHotel: any = {};
  show: boolean;
  constructor(private watsonService: WatsonService, public dataService: DataService,
    private router: Router) {
    this.show = false;
  }

  ngOnInit() {
  }

  getWatsonInfo(hotelID) {
    this.watsonService.getWatsonInfo(this.dataService.dataFromService, hotelID)
      .subscribe(oneHotel => {
        this.theHotel = oneHotel[0];
        this.show = true;
        console.log('ksadjhfkjdhs', this.theHotel.emotions);
      });
    this.router.navigate([`/hotel-list/${this.dataService.dataFromService}`]);
  }

  toggleForm() {
    this.show = !this.show;
  }
}


// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-single-contact',
//   templateUrl: './single-contact.component.html',
//   styleUrls: ['./single-contact.component.css']
// })
// export class SingleContactComponent implements OnInit {

//   @Input() oneSingleContact: any;
//   @Output() contactBeingDeleted = new EventEmitter <string>();
//   constructor() { }

//   ngOnInit() {
//   }
//   deleteCont(theContact) {
//     this.contactBeingDeleted.emit(theContact);
//   }

//   delete

// }
