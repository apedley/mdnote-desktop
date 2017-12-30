import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import * as auth from './actions';
import { ApiService } from '../../core/api.service';
import { StorageService } from '../../core/storage.service';
import { AuthService } from '../auth.service';


@Injectable()
export class AuthEffects {

  @Effect()
  signin = this.actions.ofType(auth.SIGNIN).pipe(
    switchMap((action: auth.Signin) => {
      return this.api.signIn(action.payload);
    }),
    map((result) => {
      return {
        type: auth.SIGNIN_SUCCESS,
        payload: result
      }
    }),
    catchError(error => of(new auth.SigninFailure(error)))
  );

  @Effect({ dispatch: false })
  signup = this.actions.ofType(auth.SIGNUP).pipe(
    map((action: auth.Signup) => {
      debugger;
    })
  );

  @Effect({ dispatch: false })
  saveAuthInfo = this.actions.ofType(auth.SIGNIN_SUCCESS).pipe(
    map((action: auth.SigninSuccess) => {
      this.authService.saveAuthData(action.payload);

      this.router.navigate(['/']);
    })
  );

  @Effect()
  readLocalAuthData = this.actions.ofType(auth.READ_LOCAL_AUTH_DATA).pipe(
    map((action: auth.LoadLocalAuthData) => {
      const results = this.authService.getLocalData();

      if (!results) {
        return {
          type: auth.READ_LOCAL_AUTH_DATA_FAILURE
        }
      }

      return {
        type: auth.LOAD_LOCAL_AUTH_DATA,
        payload: results
      };
    })
  );

  @Effect({ dispatch: false })
  signout = this.actions.ofType(auth.SIGNOUT).pipe(
    map((action: auth.Signout) => {

      this.router.navigate(['/signin']);
    })
  );
  constructor(private actions: Actions, private router: Router, private api: ApiService, private authService: AuthService) {}

}
