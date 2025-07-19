import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


// import { enableProdMode, importProvidersFrom } from '@angular/core';
// import { bootstrapApplication } from '@angular/platform-browser';
// import { RouteReuseStrategy, provideRouter } from '@angular/router';
// import { provideIonicAngular, IonicRouteStrategy } from '@ionic/angular/standalone';

// import { routes } from './app/app-routing.module';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, {
//   providers: [
//     { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
//     provideIonicAngular({ mode: 'ios' }),
//     provideRouter(routes),
//   ],
// });