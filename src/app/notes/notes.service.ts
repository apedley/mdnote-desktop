import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromNotesRoot from './store/reducers';
import * as notes from './store/actions';

@Injectable()
export class NotesService {
  constructor(private notesStore: Store<fromNotesRoot.State>) {}

  toggleCategory(id) {
    const stringId = String(id);
    this.notesStore.dispatch(new notes.ToggleCategory(stringId));
  }

  selectCategory(id) {
    const stringId = String(id);
    this.notesStore.dispatch(new notes.SelectCategory(stringId));
  }

  loadCategories() {
    this.notesStore.dispatch(new notes.FetchCategories());
  }

  loadNotesAndCategories() {
    this.notesStore.dispatch(new notes.FetchNotesAndCategories());
  }

  getCategories() {
    return this.notesStore.select(fromNotesRoot.selectAllCategories);
  }

  getCategoriesWithNotes() {
    return this.notesStore.select(fromNotesRoot.selectCategoriesWithNotes);
  }

  getCollapsedCategories() {
    return this.notesStore.select(fromNotesRoot.selectCollapsedCategories);
  }

  getSelectedNote() {
    // return this.notesStore.select(fromNotesRoot.selectCurrentNote);
  }
}
