import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MarkdownModule } from 'ngx-markdown';

import { CoreModule } from '../core/core.module';
import { CreateNoteComponent } from './containers/create-note/create-note.component';
import { reducers } from './store/reducers';
import { NotesService } from './notes.service';
import { NotesEffects } from './store/effects';
import { CategoryListItemComponent } from './components/category-list/category-list-item.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { NotesListViewComponent } from './containers/notes-list-view/notes-list-view.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteDetailViewComponent } from './containers/note-detail-view/note-detail-view.component';
import { NoteShowComponent } from './components/note-show/note-show.component';
import { EditNoteFormComponent } from './components/note-form/edit-note-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotePreviewComponent } from './components/note-preview/note-preview.component';
import { PipesModule } from '../shared/pipes/index';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild([
      { path: 'new', pathMatch: 'full', component: CreateNoteComponent},
      { path: ':id', component: NoteDetailViewComponent },
      { path: '', pathMatch: 'full', component: NotesListViewComponent}
    ]),
    StoreModule.forFeature('notes', reducers),
    EffectsModule.forFeature([ NotesEffects ]),
    PipesModule
  ],
  declarations: [
    CreateNoteComponent,
    CategoryListComponent,
    CategoryListItemComponent,
    NotesListViewComponent,
    NoteListComponent,
    NoteDetailViewComponent,
    NoteShowComponent,
    EditNoteFormComponent,
    NotePreviewComponent
  ],
  providers: [
    NotesService
  ],
  exports: [

  ]
})
export class NotesModule { }
