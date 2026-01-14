import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { LanguageToggle } from '../../shared/language-toggle/language-toggle';

@Component({
  selector: 'app-auth-layout',
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatDividerModule,
    LanguageToggle,
  ],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.scss',
})
export class AuthLayout {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
