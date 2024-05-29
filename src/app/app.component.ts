import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'learnangular';

  constructor(private authSV: AuthService, private router: Router) { }

  isLoggedIn(): boolean {
    return this.authSV.isAuthenticated();
  }

  logout() {
    this.authSV.logout();
    this.router.navigateByUrl('/login');
  }
}
