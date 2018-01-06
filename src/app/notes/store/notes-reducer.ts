import * as actions from './actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createSelector } from '@ngrx/store';
import { Note, Category, Share } from '../note.model';

export interface State extends EntityState<Note> {
  selectedNoteId: string | number | null;
  loaded: boolean;
}

export const adapter: EntityAdapter<Note> = createEntityAdapter<Note>({
  selectId: (note: Note) => String(note.id),
  sortComparer: false
});

export const initialState: State = adapter.getInitialState({
  selectedNoteId: null,
  loaded: false,
});

export function reducer(state = initialState, action: actions.actions) {
  switch (action.type) {
    case actions.FETCH_NOTES_AND_CATEGORIES_SUCCESS: {
      return {
        ...adapter.addAll(action.payload.notes, state),
        loaded: true
      }
    }
    case actions.SELECT_NOTE: {
      return {
        ...state,
        selectedNoteId: action.payload
      }
    }
    case actions.CREATE_NOTE_SUCCESS: {
      return {
        ...state,
        ...adapter.addOne(action.payload, state)
      }
    }
    case actions.UPDATE_NOTE_SUCCESS: {
      return {
        ...state,
        ...adapter.updateOne({ id: action.payload.id, changes: action.payload.note }, state)
      }
    }
    default: {
      return state;
    }
  }
}

export const getSelectedNoteId = (state: State) => state.selectedNoteId;
