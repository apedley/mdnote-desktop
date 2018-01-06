import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { environment } from '../environments/index';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { AuthEffects } from './auth/store/effects';
import * as fromRootStore from './reducers';
import { RouterEffects } from './core/store/router-effects';
import { UiEffects } from './core/store/ui-effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    CoreModule,
    AuthModule,
    StoreRouterConnectingModule,
    EffectsModule.forRoot([AuthEffects, RouterEffects, UiEffects]),
    StoreModule.forRoot(fromRootStore.reducers),
    // StoreModule.forRoot(fromRootStore.reducers, {metaReducers: fromRootStore.metaReducers}),
    !environment.production
    ? StoreDevtoolsModule.instrument()
    : []
  ],
  providers: [
    {provide: RouterStateSerializer, useClass: fromRootStore.CustomRouterStateSerializer}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
