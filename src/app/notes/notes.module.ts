import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule } from '../core/core.module';
import { NotesViewComponent } from './containers/notes-view/notes-view.component';
import { CreateNoteComponent } from './containers/create-note/create-note.component';
import { reducers } from './store/reducers';
import { NotesService } from './notes.service';
import { NotesEffects } from './store/effects';
import { CategoryListItemComponent } from './components/category-list/category-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild([
      { path: 'new', component: CreateNoteComponent},
      { path: '', pathMatch: 'full', component: NotesViewComponent}
    ]),
    StoreModule.forFeature('notes', reducers),
    EffectsModule.forFeature([ NotesEffects ])
  ],
  declarations: [
    NotesViewComponent,
    CreateNoteComponent,
    CategoryListItemComponent
  ],
  providers: [
    NotesService
  ],
  exports: [

  ]
})
export class NotesModule { }
