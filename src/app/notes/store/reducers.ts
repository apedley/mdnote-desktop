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

export const selectNotesEntitiesState = createSelector(
  selectNotesRootState,
  state => state.notes
)
export const selectCategoriesState = createSelector(
  selectNotesRootState,
  state => state.categories
)


export const {
  selectIds: selectCategoryIds,
  selectEntities: selectCategoryEntities,
  selectAll: selectAllCategories
} = fromCategories.adapter.getSelectors(selectCategoriesState);


export const {
  selectIds: selectNoteIds,
  selectEntities: selectNoteEntities,
  selectAll: selectAllNotes
} = fromNotes.adapter.getSelectors(selectNotesEntitiesState);

// export const selectCurrentCategoryId = createSelector(selectCategoriesState, fromCategories.getSelectedCategoryId);
// export const selectCurrentCategory = createSelector(
//   selectCategoryEntities,
//   selectCurrentCategoryId,
//   (categoryEntities, categoryId) => categoryEntities[categoryId]
// );

// export const selectCurrentNoteId = createSelector(selectNotesState, fromNotes.getSelectedNoteId);
// export const selectCurrentNote = createSelector(
//   selectNoteEntities,
//   selectCurrentNoteId,
//   (noteEntities, noteId) => noteEntities[noteId]
// );

export const selectCollapsedCategories = createSelector(selectCategoriesState, fromCategories.getCollapsed);
export const selectCategoriesLoaded = createSelector(selectCategoriesState, fromCategories.getLoaded);

export const selectCategoriesWithNotes = createSelector(
  [selectAllCategories, selectAllNotes, selectCategoriesLoaded],
  (categories, notes, categoriesLoaded) => {
    if (!categoriesLoaded) {
      return [];
    }

    const uncategorized: Category = {
      name: 'Uncategorized',
      id: 0
    }

    const categoriesWithUncategoriezed: Category[] = [
      uncategorized,
      ...categories
    ]

    const composedCategories: Category[] = categoriesWithUncategoriezed.map(category => {
      category.notes = notes.filter(note => {
        const noteCategoryId = note.categoryId || 0;
        return noteCategoryId === category.id
      })
      return category;
    });

    return composedCategories;
  }
);

