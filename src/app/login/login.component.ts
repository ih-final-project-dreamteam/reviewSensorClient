import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myService: AuthService, private myRouter: Router) {}

  formInfo: any = {username: '', password: ''};
  user: any;
  error: any;
  title = 'app';

ngOnInit() {
  this.myService.isLoggedIn()
  .then( () => {
    this.user = this.myService.currentUser;
    if (this.user === null) {
      this.myRouter.navigate(['/login']);
    } else {
      this.myRouter.navigate(['/index']);
    }

  } )
  .catch( error => {
    console.log('Error while in Login component : ', error);
  } );

}

  login() {
    this.myService.login(this.formInfo)
      .subscribe(
        () => {
          this.user = this.myService.currentUser;
            this.myRouter.navigate(['/index']);
        },
        (err) => this.error = err
      );
  }

  logout() {
    this.myService.logout()
      .subscribe(
        () => {
          this.user = null;
          this.formInfo = {};
        },
        (err) => this.error = err
      );
    console.log('user signed out', this.user);
    this.myRouter.navigate(['/login']);
  }

  refresh(): void {
    window.location.reload();
}

}