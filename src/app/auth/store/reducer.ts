import * as auth from './actions';
import { Authenticate, User } from '../user.model';

export interface State {
  user: User | null;
  loggedIn: boolean;
  errors: string[];
  token: string | null;
  formLoading: boolean;
}

export const initialState: State = {
  user: null,
  loggedIn: false,
  errors: [],
  token: null,
  formLoading: false
};

export function reducer(state = initialState, action: auth.Actions): State {
  switch (action.type) {
    case auth.SIGNIN:
    case auth.SIGNUP: {
      return { ...state, formLoading: true }
    }
    case auth.SIGNIN_SUCCESS:
    case auth.LOAD_LOCAL_AUTH_DATA: {
      return { ...state, user: action.payload.user, token: action.payload.token, loggedIn: true, errors: [], formLoading: false };
    }
    case auth.SIGNUP_SUCCESS: {
      return { ...state, formLoading: false };
    }
    case auth.SIGNIN_FAILURE:
    case auth.SIGNUP_FAILURE: {
      return { ...state, errors: action.payload, formLoading: false };
    }
    case auth.SIGNOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export const getLoggedIn = (state: State) => state.loggedIn;
export const getErrors = (state: State) => state.errors;
export const getToken = (state: State) => state.token;
export const getUser = (state: State) => state.user;
export const getFormLoading = (state: State) => state.formLoading;
