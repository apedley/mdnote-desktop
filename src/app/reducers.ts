import * as fromRouter from '@ngrx/router-store';
import * as fromAuth from './auth/store/reducer';

import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import { Params, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { getErrors } from './auth/store/reducer';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export class CustomRouterStateSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const queryParams = routerState.root.queryParams;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    return { url, queryParams, params };
  }
}

export interface State {
  auth: fromAuth.State;
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}


export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  routerReducer: fromRouter.routerReducer
};


export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('routerReducer');

export const getUrl = createSelector(
  getRouterState,
  state => state.state.url
);

export const getAuthState = createFeatureSelector<fromAuth.State>('auth');


export const getUser = createSelector(getAuthState, fromAuth.getUser);
export const getToken = createSelector(getAuthState, fromAuth.getToken);
export const getError = createSelector(getAuthState, fromAuth.getErrors);
export const getLoggedIn = createSelector(getAuthState, fromAuth.getLoggedIn);
export const getFormLoading = createSelector(getAuthState, fromAuth.getFormLoading);
