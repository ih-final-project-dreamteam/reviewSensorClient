import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private myService: AuthService) {}

  formInfo: any = {username: '', userFname: '', userLname: '', password: ''};
  user: any;
  error: any;
  title = 'app';


  signup() {
    this.myService.signup(this.formInfo)
      .subscribe(
        (user) => this.user = user,
        (err) => this.error = err
      );
  }

}

// ==================old version==================


// import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { AuthService } from '../services/auth.service';

// @Component({
//   selector: 'app-auth',
//   templateUrl: './auth.component.html',
//   styleUrls: ['./auth.component.css']
// })
// export class AuthComponent {

//   constructor(private myService: AuthService) {}

//   formInfo: any = {username: '', userFname: '', userLname: '', password: '', userTrips: '' };
//   user: any;
//   error: any;
//   title = 'app';


//   login() {
//     this.myService.login(this.formInfo)
//       .subscribe(
//         (user) => this.user = user,
//         (err) => this.error = err
//       );
//   }

//   signup() {
//     this.myService.signup(this.formInfo)
//       .subscribe(
//         (user) => this.user = user,
//         (err) => this.error = err
//       );
//   }

//   logout() {
//     this.myService.logout()
//       .subscribe(
//         () => {this.user = null,
//           this.formInfo = {};
//         },
//         (err) => this.error = err
//       );
//   }
//   isLoggedIn() {
//    this.myService.isLoggedIn(this.formInfo)
//

// getPrivateData() {  // use islogdedin instead
//   this.myService.getPrivateData()
//     .subscribe(
//       (data) => this.privateData = data,
//       (err) => this.error = err
//     );
// }

// }
