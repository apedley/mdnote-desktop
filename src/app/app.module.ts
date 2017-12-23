import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { environment } from '../environments/index';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    CoreModule,
    AuthModule,
    StoreRouterConnectingModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(fromRootStore.reducers),
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
