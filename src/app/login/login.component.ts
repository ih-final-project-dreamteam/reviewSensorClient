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
  .toPromise()
  .then( () => {
    this.myRouter.navigate(['/login']);
  } )
  .catch( error => {
    console.log('Error while in ogin component : ', error);
  } );

}

  login() {
    this.myService.login(this.formInfo)
      .subscribe(
        (user) => {
          this.user = user;
          this.myRouter.navigate(['/login']);
        },
        (err) => this.error = err
      );
  }

  logout() {
    this.myService.logout()
    .subscribe(
    () => {this.user = null;
      this.formInfo = {};
    },
    (err) => this.error = err
  );
  }

  refresh(): void {
    window.location.reload();
}

}
