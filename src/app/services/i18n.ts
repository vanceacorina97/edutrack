import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import { LANGUAGES } from '../models/language.const';

@Injectable({ providedIn: 'root' })
export class I18n {
  supported = [LANGUAGES.EN, LANGUAGES.RO];
  default = LANGUAGES.EN;

  constructor(private translate: TranslateService) {}

  init(): Promise<void> {
    const saved = localStorage.getItem('lang') || undefined;
    const browserLang = (navigator.language || this.default).split('-')[0];
    const lang =
      saved || (this.isSupported(browserLang) ? browserLang : this.default);

    this.translate.addLangs(this.supported);
    this.translate.setDefaultLang(this.default);

    return firstValueFrom(this.translate.use(lang))
      .then(() => {
        localStorage.setItem('lang', lang);
      })
      .catch(() => {
        // fallback to default if any error
        this.translate.use(this.default);
      });
  }

  switch(lang: string) {
    if (!this.isSupported(lang)) return;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  current() {
    return this.translate.currentLang || this.translate.getDefaultLang();
  }

  private isSupported(lang: string) {
    return this.supported.includes(lang);
  }
}
