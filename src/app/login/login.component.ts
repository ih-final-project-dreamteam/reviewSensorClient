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

  constructor(private authService: AuthService, private router: Router) {}

  formInfo: any = {username: '', password: ''};
  user: any;
  error: any;
  title = 'app';

  ngOnInit() {
    this.authService.isLoggedIn()
      .then( () => {
        this.user = this.authService.currentUser;
        if (this.user === null) {
          this.router.navigate(['/login']);
        } else {
          this.router.navigate(['/index']);
        }
      })
      .catch( err =>  {
        console.log('error in login component =======> ', err);
        this.router.navigate(['/login']);
      });

  }


  login() {
    this.authService.login(this.formInfo)
      .subscribe(
        () => {
          this.user = this.authService.currentUser;
            this.router.navigate(['/index']);
        },
        (err) => this.error = err
      );
  }

  refresh(): void {
    window.location.reload();
  }

}
