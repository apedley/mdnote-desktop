import { Action } from '@ngrx/store';
import { Authenticate, User } from '../user.model';

export const SIGNUP = '[Auth] Signup';
export const SIGNUP_SUCCESS = '[Auth] Signup Success';
export const SIGNUP_FAILURE = '[Auth] Signup Failure';

export const SIGNIN = '[Auth] Signin';
export const SIGNIN_SUCCESS = '[Auth] Signin Success';
export const SIGNIN_FAILURE = '[Auth] Signin Failure';

export const SIGNOUT = '[Auth] Signout';

export const READ_LOCAL_AUTH_DATA = '[Auth] Read Local Auth Data';
export const READ_LOCAL_AUTH_DATA_FAILURE = '[Auth] Read Local Auth Data Failure';
export const LOAD_LOCAL_AUTH_DATA = '[Auth] Load Local Auth Data';

export class Signup implements Action {
  readonly type = SIGNUP;

  constructor(public payload: Authenticate) {}
}

export class SignupSuccess implements Action {
  readonly type = SIGNUP_SUCCESS;
}

export class SignupFailure implements Action {
  readonly type = SIGNUP_FAILURE;

  constructor(public payload: any) {}
}

export class Signin implements Action {
  readonly type = SIGNIN;

  constructor(public payload: Authenticate) {}
}

export class SigninSuccess implements Action {
  readonly type = SIGNIN_SUCCESS;

  constructor(public payload: { user: User, token: string }) {}
}

export class SigninFailure implements Action {
  readonly type = SIGNIN_FAILURE;

  constructor(public payload: any) {}
}


export class Signout implements Action {
  readonly type = SIGNOUT;
}

export class ReadLocalAuthData implements Action {
  readonly type = READ_LOCAL_AUTH_DATA;
}

export class ReadLocalAuthDataFailure implements Action {
  readonly type = READ_LOCAL_AUTH_DATA_FAILURE;
}

export class LoadLocalAuthData implements Action {
  readonly type = LOAD_LOCAL_AUTH_DATA;

  constructor(public payload: { user: User, token: string }) {}
}

export type Actions =
  | Signup
  | SignupSuccess
  | SignupFailure
  | Signin
  | SigninSuccess
  | SigninFailure
  | Signout
  | LoadLocalAuthData
  | ReadLocalAuthData
  | ReadLocalAuthDataFailure;
