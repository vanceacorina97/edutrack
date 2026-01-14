import { Component } from '@angular/core';
import { AuthLayout } from '../../layout/auth-layout/auth-layout';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    AuthLayout,
    FormsModule,
    RouterLink,
    MatInputModule,
    MatButtonModule,
    AuthLayout,
    ReactiveFormsModule,
    TranslateModule,
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  registrationForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
    confirmPassword: FormControl<string>;
  }>;

  constructor(private fb: NonNullableFormBuilder) {
    this.registrationForm = this.fb.group(
      {
        email: this.fb.control('', [Validators.required, Validators.email]),
        password: this.fb.control('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirmPassword: this.fb.control('', Validators.required),
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  register() {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    // Submit logic
    console.log('Registering with', this.registrationForm.value);
  }
}
