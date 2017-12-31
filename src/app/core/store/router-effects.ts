import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Effect, Actions } from '@ngrx/effects';
import * as routerActions from './router-actions';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable()
export class RouterEffects {

  @Effect({ dispatch: false })
  back = this.actions.ofType(routerActions.BACK).pipe(
    map((action) => {
      this.location.back();
    })
  );

  constructor(
    private actions: Actions,
    private router: Router,
    private location: Location) { }
}
