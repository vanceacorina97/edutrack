import { Component } from '@angular/core';
import { I18n } from '../../services/i18n';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LANGUAGES } from '../../models/language.const';

@Component({
  selector: 'app-language-toggle',
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './language-toggle.html',
  styleUrl: './language-toggle.scss',
})
export class LanguageToggle {
  currentLang: string = 'en';

  constructor(private i18n: I18n) {}

  ngOnInit() {
    this.currentLang = this.i18n.current() || LANGUAGES.EN;
  }

  toggleLang() {
    const next =
      this.currentLang === LANGUAGES.EN ? LANGUAGES.RO : LANGUAGES.EN;
    this.i18n.switch(next);
    this.currentLang = next;
  }
}
