import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthLayout } from '../../layout/auth-layout/auth-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MatInputModule,
    MatButtonModule,
    AuthLayout,
    TranslateModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/dashboard']);
  }
}
