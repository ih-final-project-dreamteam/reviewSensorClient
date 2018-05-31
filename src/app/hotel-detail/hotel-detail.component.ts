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

    this.theHotel = this.oneSingleHotel;
  }

  getWatsonInfo(hotel) {
    console.log(hotel);
    const searchTerm  = this.dataService.dataFromService;
    this.watsonService.getWatsonInfo(searchTerm, hotel.id, hotel.price)
      .subscribe(oneHotel => {
        this.theHotel = oneHotel[0];
        this.showWatson = true;
        console.log('it iscalling:', this.theHotel.emotions);
      });
    this.router.navigate([`/hotel-list/${this.dataService.dataFromService}/${hotel.price}`]);
  }

  goToCreateTrip() {
    this.dataService.dataFromService = this.theHotel;
    this.router.navigate([`/create-trip`]);
  }

  refresh(): void {
    window.location.reload();
  }
}



