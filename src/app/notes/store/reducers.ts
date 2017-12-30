import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromCategories from './categories-reducer';
import * as fromNotes from './notes-reducer';
import * as fromRoot from '../../reducers';
import { Category, Note } from '../note.model';

export interface NotesRootState {
  categories: fromCategories.State,
  notes: fromNotes.State
}

export interface State extends fromRoot.State {
  notes: NotesRootState
}

export const reducers: ActionReducerMap<NotesRootState> = {
  categories: fromCategories.reducer,
  notes: fromNotes.reducer
}

export const selectNotesRootState = createFeatureSelector<NotesRootState>('notes');
