import { bootstrapApplication } from '@angular/platform-browser';
import {
  importProvidersFrom,
  inject,
  provideAppInitializer,
} from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';

import { environment } from './environements/environement.example';

import { appConfig } from './app/app.config';
import { App } from './app/app';
import { I18n } from './app/services/i18n';
import { HttpLoaderFactory } from './app/services/translate-loader';

/** factory for TranslateModule loader */
export function httpLoaderFactory(http: HttpClient): TranslateLoader {
  return HttpLoaderFactory(http);
}

bootstrapApplication(App, {
  providers: [
    ...(appConfig.providers ?? []),

    // For a non-SSR/browser-only app prefer the default provider:
    provideHttpClient(),

    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),

    // Firebase / AngularFire
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),

    provideAppInitializer(() => {
      const i18n = inject(I18n);
      return i18n.init();
    }),
  ],
}).catch((err) => console.error(err));
