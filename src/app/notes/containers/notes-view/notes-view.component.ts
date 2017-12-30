import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { NotesService } from '../../notes.service';
import { Category, Note } from '../../note.model';

import * as fromCategories from '../../store/categories-reducer'
@Component({
  selector: 'app-notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.scss']
})
export class NotesViewComponent implements OnInit {
  categories: Observable<Category[]>;
  collapsedCategories: Observable<any>;
  selectedNote: Observable<Note>;

  constructor(private notes: NotesService) {
  }


  ngOnInit() {
    this.notes.loadNotesAndCategories();
    this.categories = this.notes.getCategoriesWithNotes();
    this.collapsedCategories = this.notes.getCollapsedCategories();
  }

  toggleCategory(id) {
    this.notes.toggleCategory(id);
  }

}
