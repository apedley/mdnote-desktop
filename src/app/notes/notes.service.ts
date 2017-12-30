import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromNotesRoot from './store/reducers';
import * as notes from './store/actions';
import { selectCategoriesWithNotes, selectAllCategories, selectCollapsedCategories, selectCategoriesLoaded, selectCurrentNote } from './store/selectors';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

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

  selectNote(id) {
    return this.notesStore.dispatch(new notes.SelectNote(String(id)));
  }
}
