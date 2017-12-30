import * as actions from './actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createSelector } from '@ngrx/store';
import { Note, Category } from '../note.model';

export interface State extends EntityState<Category> {
  collapsed: {};
  selectedCategoryId: string | null;
  loaded: boolean;
}

export const adapter: EntityAdapter<Category> = createEntityAdapter<Category>({
  selectId: (category: Category) => String(category.id),
  sortComparer: false
});

export const initialState: State = adapter.getInitialState({
  collapsed: {},
  selectedCategoryId: null,
  loaded: false
});

export function reducer(state = initialState, action: actions.actions) {
  switch (action.type) {
    case actions.FETCH_NOTES_AND_CATEGORIES_SUCCESS: {
      return {
        ...adapter.addAll(action.payload.categories, state),
        loaded: true
      }
    }
    case actions.FETCH_CATEGORIES_SUCCESS: {
      return {
        ...adapter.addAll(action.payload, state),
        loaded: true
      }
    }
    case actions.SELECT_CATEGORY: {
      return {
        ...state,
        selectedCategoryId: action.payload
      }
    }
    case actions.TOGGLE_CATEGORY: {
      return {
        ...state,
        collapsed: {
          ...state.collapsed,
          [action.payload]: !state.collapsed[action.payload]
        }
      }
    }
    default: {
      return state;
    }
  }
}

export const getSelectedCategoryId = (state: State) => state.selectedCategoryId;

export const getCats = (state: State) => state.entities;

export const getCollapsed = (state: State) => state.collapsed;

export const getLoaded = (state: State) => state.loaded;
