import { Action } from '@ngrx/store';

export const SET_TITLE = '[UI] Set Title';


export class SetTitle implements Action {
  readonly type = SET_TITLE;
  constructor(public payload: string) {}
}

export type Actions =
  SetTitle |
  null;
