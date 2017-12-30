import { environment } from '../../environments';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as fromAuth from './store/reducer';
import * as fromRoot from '../reducers';
import * as auth from './store/actions';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { Authenticate, User, AuthData } from './user.model';
import { Store } from '@ngrx/store';
import { StorageService } from '../core/storage.service';


@Injectable()
export class AuthService {

  constructor(private authStore: Store<fromAuth.State>, private storage: StorageService) {}

  signup(userData: Authenticate) {
    this.authStore.dispatch(new auth.Signup(userData));
  }

  signin(userData: Authenticate) {
    this.authStore.dispatch(new auth.Signin(userData));
  }

  signout() {
    this.deleteLocalData();
    this.authStore.dispatch(new auth.Signout());
  }

  saveAuthData(data: AuthData) {
    this.storage.set('auth', data);
  }

  getLocalData() {
    const data = this.storage.get('auth');

    if (!data) {
      return false;
    }

    return data;
  }


  loadLocalData() {
    this.authStore.dispatch(new auth.ReadLocalAuthData());
  }

  deleteLocalData() {
    this.storage.remove('auth');
  }

  getErrors() {
    return this.authStore.select(fromRoot.getError);
  }

  getToken() {
    return this.authStore.select(fromRoot.getToken);
  }

  getAuthenticated() {
    return this.authStore.select(fromRoot.getLoggedIn);
  }

  getFormLoading() {
    return this.authStore.select(fromRoot.getFormLoading);
  }

  getUser() {
    return this.authStore.select(fromRoot.getUser);
  }
}
