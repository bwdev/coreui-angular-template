import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

const LOCATION_STRATEGY = {
  provide: LocationStrategy,
  useClass: HashLocationStrategy
};

import { AppInterceptor } from './shared/app.interceptor';

const INTERCEPTORS = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true
};

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavigationService } from './shared/navigation.service';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    DashboardModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreDevtoolsModule.instrument({
      name: 'NGRX DevTools',
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
  ],
  providers: [
    LOCATION_STRATEGY,
    INTERCEPTORS,
    NavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
