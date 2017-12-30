import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import * as notes from './actions';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { map, tap, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { ApiService } from '../../core/api.service';
import { Router } from '@angular/router';

@Injectable()
export class NotesEffects {

  @Effect()
  fetchCategories: Observable<Action> = this.actions.ofType(notes.FETCH_CATEGORIES).pipe(
    switchMap((action) => {
      return this.api.getAllCategories();
    }),
    map((categories) => {
      debugger;
      return {
        type: notes.FETCH_CATEGORIES_SUCCESS,
        payload: categories
      };
    }),
    catchError(error => of(new notes.FetchCategoriesFailure(error)))
  );


  @Effect()
  fetchNotesAndCategories: Observable<Action> = this.actions.ofType(notes.FETCH_NOTES_AND_CATEGORIES, notes.REFETCH_NOTES_AND_CATEGORIES).pipe(
    switchMap((action) => {
      return this.api.getNotesAndCategories();
    }),
    map((results: any) => {

      return {
        type: notes.FETCH_NOTES_AND_CATEGORIES_SUCCESS,
        payload: {
          categories: results.categories,
          notes: results.notes
        }
      };
    }),
    catchError(error => of(new notes.FetchNotesAndCategoriesFailure(error)))
  );

  @Effect({dispatch: false})
  selectNote = this.actions.ofType<notes.SelectNote>(notes.SELECT_NOTE).pipe(
    map((action) => {
      this.router.navigate(['/notes', action.payload])
    })
  );

  constructor(private actions: Actions, private api: ApiService, private router: Router) {}
}

