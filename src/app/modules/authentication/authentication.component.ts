import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { isWhiteSpace } from './function/whiteSpace-validators';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      // username: ['long1', [Validators.required, Validators.minLength(5), Validators.pattern(/^(?=.*[a-z])(?=.*\d).{2,}$/), isWhiteSpace]],
      // password: ['long1A', [Validators.required, Validators.minLength(5), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{3,}$/)]],

      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  Unauthorized = false;
  login() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe({
        next: () => { this.router.navigateByUrl('/exercises/9may/list'); },
        error: (err) => {
          this.Unauthorized = true
        }
      });
    }
  }
}
