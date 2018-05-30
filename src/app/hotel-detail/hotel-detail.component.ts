import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WatsonService } from '../services/watson.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { YelpService } from '../services/yelp.service';
@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
  @Input() oneSingleHotel: any;
  @Input() checked: any;
  theHotel: any = {};
  showWatson: boolean;
  constructor(private watsonService: WatsonService, public dataService: DataService,
    private router: Router) {
    this.showWatson = false;
  }

  ngOnInit() {
    if (this.checked) {
      this.getWatsonInfo(this.oneSingleHotel);
    }
  }

  getWatsonInfo(hotel) {
    console.log(hotel);
    const searchTerm  = this.dataService.dataFromService;
    this.watsonService.getWatsonInfo(searchTerm, hotel.id, hotel.price)
      .subscribe(oneHotel => {
        this.theHotel = oneHotel[0];
        this.showWatson = true;
      });
    this.router.navigate([`/hotel-list/${this.dataService.dataFromService}/${hotel.price}`]);
  }

  goToCreateTrip() {
    this.dataService.dataFromService = this.theHotel;
    this.router.navigate([`/create-trip`]);
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
