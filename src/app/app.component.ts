<<<<<<< HEAD
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
=======
import { Component } from '@angular/core';
>>>>>>> f14d49441f94d2eec0d9b7d7ed6e3c95d7fec5ba

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

<<<<<<< HEAD
  constructor( private route: ActivatedRoute, private router: Router ) {}

  // onAnchorClick ( ) {
  //   this.route.fragment.subscribe ( f => {
  //     const element = document.querySelector ( "#" + f );
  //     if (element) element.scrollIntoView (element)
  //   });
  // }

  // ngOnInit() {
  //   this.router.events.subscribe(s => {
  //     if (s instanceof NavigationEnd) {
  //       const tree = this.router.parseUrl(this.router.url);
  //       if (tree.fragment) {
  //         const element = document.querySelector("#" + tree.fragment);
  //         if (element) { element.scrollIntoView(element); }
  //       }
  //     }
  //   });
  // }
=======
>>>>>>> f14d49441f94d2eec0d9b7d7ed6e3c95d7fec5ba
}

