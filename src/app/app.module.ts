import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { YelpService } from './services/yelp.service';
import { WatsonService } from './services/watson.service';
import { DataService } from './services/data.service';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index',  component: LandingPageComponent },
  { path: 'signup', component: AuthComponent },
  { path: 'login', component: AuthComponent },
  { path: 'hotel-list/:searchTerm', component: HotelListComponent },
  { path: 'hotel-list/:searchTerm', component: HotelDetailComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LandingPageComponent,
    HotelListComponent,
    HotelDetailComponent,
    CreateTripComponent,
    DashboardComponent,
    TripDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    HttpModule,
    RouterModule.forRoot(routes)

  ],
  providers: [AuthService, YelpService, DataService, WatsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
