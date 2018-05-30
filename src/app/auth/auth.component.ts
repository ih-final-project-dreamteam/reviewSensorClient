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
        (user) => {this.user = user;  console.log('User on signup:', this.user ); },
        (err) => this.error = err
      );
  }

  refresh(): void {
    window.location.reload();
}

}

// ==================old version==================


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
