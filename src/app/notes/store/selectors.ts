import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectNotesRootState } from './reducers';
import * as fromCategories from './categories-reducer';
import * as fromNotes from './notes-reducer';
import { Category, Note } from '../note.model';

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

export const selectCurrentNoteId = createSelector(selectNotesEntitiesState, fromNotes.getSelectedNoteId);
export const selectCurrentNote = createSelector(
  selectNoteEntities,
  selectCurrentNoteId,
  (noteEntities, noteId) => noteEntities[noteId]
);

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

    const categoriesWithUncategorized: Category[] = [
      uncategorized,
      ...categories
    ]

    const categoryIndexes = {};

    categoriesWithUncategorized.forEach((category, index) => {
      category.notes = [];
      categoryIndexes[category.id] = index;
    });


    notes.forEach((note) => {
      const categoryIndex = note.categoryId ? categoryIndexes[note.categoryId] : categoryIndexes[0];
      const cat = categoriesWithUncategorized[categoryIndex];
      cat.notes.push(note);
    });

    // const composedCategories: Category[] = categoriesWithUncategorized.map(category => {
    //   category.notes = notes.filter(note => {
    //     const noteCategoryId = note.categoryId || 0;
    //     return noteCategoryId === category.id
    //   })
    //   return category;
    // });

    return categoriesWithUncategorized;
  }
);

