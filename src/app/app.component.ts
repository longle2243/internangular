import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'learnangular';

  isVisible = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  constructor(private authSV: AuthService, private router: Router) { }

  isLoggedIn(): boolean {
    return this.authSV.isAuthenticated();
  }

  logout() {
    this.authSV.logout();
    this.router.navigateByUrl('/auth');
  }
}
