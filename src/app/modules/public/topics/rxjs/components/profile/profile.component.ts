import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileService } from '@app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private profileSV: ProfileService
  ) {
    this.form = this.fb.group({
      personalInfo: this.fb.group([]),
      avatar: [null],
    });
  }

  get personalInfo() {
    return this.form.controls['personalInfo'] as FormGroup;
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.profileSV
        .saveProfile(this.form.controls['avatar'].value, this.form.value)
        .subscribe(res => {
          console.log(res);
          this.form.reset();
        });
    }
  }
}
