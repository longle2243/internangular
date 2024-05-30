import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { FakeapiService } from './services/fakeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'learnangular';

  constructor(
    private authSV: AuthService,
    private router: Router,
    private fakeSV: FakeapiService
  ) {}

  isLoggedIn(): boolean {
    return this.authSV.isAuthenticated();
  }

  logout() {
    this.authSV.logout();
    this.router.navigateByUrl('/login');
  }

  unauthorized() {
    this.fakeSV.fake().subscribe();
  }
}
