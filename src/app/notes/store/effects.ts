import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import * as notes from './actions';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { map, tap, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { ApiService } from '../../core/api.service';
import { UiService } from '../../core/ui.service';
import { Router } from '@angular/router';
import { Note, Share } from '../note.model';

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

  @Effect()
  createNote = this.actions.ofType(notes.CREATE_NOTE).pipe(
    switchMap((action: notes.CreateNote) => {
      return this.api.createNote(action.payload);
    }),
    map((note: Note) => {
      return {
        type: notes.CREATE_NOTE_SUCCESS,
        payload: note
      };
    }),
    catchError(error => of(new notes.CreateNoteFailure([error])))
  )

  @Effect()
  createNoteSuccess = this.actions.ofType(notes.CREATE_NOTE_SUCCESS).pipe(
    map((action: notes.CreateNoteSuccess) => {
      // this.router.navigate(['/notes', action.payload.id])
      return {
        type: notes.SELECT_NOTE,
        payload: action.payload.id
      }
    })
  )

  @Effect()
  updateNote = this.actions.ofType(notes.UPDATE_NOTE).pipe(
    switchMap((action: notes.UpdateNote) => {
      return this.api.updateNote(action.id, action.payload);
    }),
    map((note: Note) => {
      this.router.navigate(['/notes', note.id]);
      return {
        type: notes.UPDATE_NOTE_SUCCESS,
        payload: { note, id: note.id }
      }
    }),
    catchError(error => of(new notes.UpdateNoteFailure([error])))
  )

  @Effect()
  createNoteShare = this.actions.ofType(notes.CREATE_NOTE_SHARE).pipe(
    switchMap((action: notes.CreateNoteShare) => {
      return this.api.createNoteShare(action.payload);
    }),
    map((share: Share) => {
      // this.uiService.displayShare(share);
      return {
        type: notes.CREATE_NOTE_SHARE_SUCCESS,
        payload: share
      }
    }),
    catchError(error => of(new notes.CreateNoteShareFailure([error])))
  )
  constructor(private actions: Actions, private api: ApiService, private router: Router, private uiService: UiService) {}
}

