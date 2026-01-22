import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withHashLocation } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { CoreModule } from './app/core/core.module';
import { SharedModule } from './app/shared/shared.module';
import { appRoutes } from './app/app.routes';
import { WEB_API_URL } from 'sailpoint-components';
import { environment } from './environments/environment';

// AoT-compatible translate loader factory
export const httpLoaderFactory = (http: HttpClient): TranslateHttpLoader =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json');

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideRouter(appRoutes, withHashLocation()),
    { provide: WEB_API_URL, useValue: environment.webApiUrl },
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient],
        },
      }),
      CoreModule,
      BrowserModule,
      BrowserAnimationsModule,
      SharedModule

    )
  ],
}).catch((err) => console.error(err));
