import { ActionReducer } from '@ngrx/store';

export function reducer(appReducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return appReducer(state, action);
  }
}
