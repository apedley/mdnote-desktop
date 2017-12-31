const INIT_ACTION = '@ngrx/store/init';
import { ActionReducer } from '@ngrx/store';
import * as ElectronSettings from 'electron-settings';


/*********
 *
 *
 *
 * https://github.com/btroncone/ngrx-store-localstorage
 */

const storeKeys = ['auth', 'notes', 'ui'];

export function syncStorage(nextState) {
  const slices = {};
  storeKeys.forEach(key => {
    if (!nextState[key]) {
      return;
    }

    const slice = nextState[key];

    slices[key] = slice;

  });

  ElectronSettings.set('state', slices);
}


export function storeMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    let nextState;

    if (action.type === INIT_ACTION) {
      // const rehydrated = ElectronSettings.get('state.rehydrated')
      const oldState = ElectronSettings.get('state');

      nextState = reducer(oldState, action);
    } else {
      nextState = reducer(state, action);
    }

    syncStorage(nextState);

    return reducer(state, action);
  }
}
