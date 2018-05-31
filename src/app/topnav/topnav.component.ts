import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  user: any;
  error: any;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {

    this.user = this.authService.currentUser;

  }


  logout() {
    this.authService.logout()
      .subscribe(
        () => {
          this.user = null;
        },
        (err) => this.error = err
      );
    console.log('user signed out', this.user);
    this.router.navigate(['/login']);
  }

  goToDashboard() {
    this.router.navigate([`/dashboard/${this.user._id}`]);
  }

  refresh(): void {
    window.location.reload();
  }

}
