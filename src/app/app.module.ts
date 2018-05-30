import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { DxBarGaugeModule } from 'devextreme-angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ChartsModule } from 'ng2-charts';

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
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { BarGaugeComponent } from './bar-gauge/bar-gauge.component';
import { MaterialModule } from './material.module';
import { Color } from 'ng2-charts';
import pattern from 'patternomaly';
import Chart from 'chart.js';


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index',  component: LandingPageComponent },
  { path: 'signup', component: AuthComponent },
  { path: 'login', component: LoginComponent },
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
    LoginComponent,
    BarGaugeComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    DxBarGaugeModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ScrollToModule.forRoot(),
    MaterialModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [AuthService, YelpService, DataService, WatsonService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

