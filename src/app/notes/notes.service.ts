import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromNotesRoot from './store/reducers';

import * as notes from './store/actions';
import { selectCategoriesWithNotes, selectAllCategories, selectCollapsedCategories, selectCategoriesLoaded, selectCurrentNote, selectCategoriesWithUncategorized, selectRouteNote } from './store/selectors';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Note, Category } from './note.model';

@Injectable()
export class NotesService implements OnDestroy {
  categoriesLoaded: Observable<boolean>;
  categoriesLoadedSubscription: Subscription;

  constructor(private notesStore: Store<fromNotesRoot.State>) {
    this.categoriesLoaded = this.notesStore.select(selectCategoriesLoaded);

    this.categoriesLoadedSubscription = this.categoriesLoaded.subscribe(loaded => {
      if (!loaded) {
        this.notesStore.dispatch(new notes.FetchNotesAndCategories());
      }
    });
  }

  ngOnDestroy() {
    this.categoriesLoadedSubscription.unsubscribe();
  }

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

    // this.categoriesLoaded.pipe(
    //   map(loaded => {
    //     debugger;
    //     this.notesStore.dispatch(new notes.FetchNotesAndCategories());
    //   })
    // )

    // this.categoriesLoaded.subscribe(loaded => {
    //   if (!loaded) {
    //     this.notesStore.dispatch(new notes.FetchNotesAndCategories());
    //   }
    // })
  }

  getCategories() {
    return this.notesStore.select(selectAllCategories);
  }

  getCategoriesWithNotes() {
    return this.notesStore.select(selectCategoriesWithNotes);
  }

  getCollapsedCategories() {
    return this.notesStore.select(selectCollapsedCategories);
  }

  getSelectedNote() {
    return this.notesStore.select(selectCurrentNote);
  }

  getRouteNote() {
    return this.notesStore.select(selectRouteNote);
  }

  selectNote(id) {
    return this.notesStore.dispatch(new notes.SelectNote(String(id)));
  }

  getCategoriesWithUncategorized() {
    return this.notesStore.select(selectCategoriesWithUncategorized);
  }

  createNote(note: Note) {
    const sanitizedNote = this._fixCategoryId(note);
    return this.notesStore.dispatch(new notes.CreateNote(sanitizedNote));
  }

  private _fixCategoryId(note: Note) {
    if (note.categoryId === '0' || note.categoryId === 0) {
      note.categoryId = null;
    } else if (typeof note.categoryId === 'string') {
      note.categoryId = parseInt(note.categoryId, 10);
    }
    return note;
  }
}
