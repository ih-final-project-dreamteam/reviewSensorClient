import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CrudService } from './services/crud.service';
import { LoginComponent } from './login/login.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { TopnavComponent } from './topnav/topnav.component';
import { DatePipe } from '@angular/common';
import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { MaterialModule } from './material.module';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatProgressBarModule} from '@angular/material/progress-bar';



const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index',  component: LandingPageComponent },
  { path: 'signup', component: AuthComponent },
  { path: 'login', component: LoginComponent },
  { path: 'hotel-list/:searchTerm', component: HotelListComponent },
  { path: 'hotel-list/:searchTerm', component: HotelDetailComponent },
  { path: 'create-trip', component: CreateTripComponent },
  { path: 'dashboard/:userId', component: DashboardComponent }

];


@Pipe({
  name: 'sortgrid'
})

@Injectable()
export class SortGridPipe implements PipeTransform {
  transform(array: Array<any>, args: string): Array<any> {
      if (typeof args[0] === 'undefined') {
          return array;
      }
      const direction = args[0][0];
      const column = args.replace('-', '');
      array.sort((a: any, b: any) => {
        const left = Number(new Date(a[column]));
        const right = Number(new Date(b[column]));
        return (direction === '-') ? right - left : left - right;
      });
      return array;
  }
}

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
    TopnavComponent,
    SortGridPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ScrollToModule.forRoot(),
    MaterialModule,
    // BrowserAnimationsModule,
    // MatProgressBarModule
  ],
  exports: [
    MaterialModule,
    // BrowserAnimationsModule,
    // MatProgressBarModule
  ],
  providers: [AuthService, YelpService, DataService, WatsonService, CrudService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
