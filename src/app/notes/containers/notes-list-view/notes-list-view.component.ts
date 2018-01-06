import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { NotesService } from '../../notes.service';
import { Category, Note } from '../../note.model';

import * as fromCategories from '../../store/categories-reducer'
import { Router } from "@angular/router";
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-notes-list-view',
  templateUrl: './notes-list-view.component.html',
  styleUrls: ['./notes-list-view.component.scss']
})
export class NotesListViewComponent implements OnInit {
  categories: Observable<Category[]>;
  collapsedCategories: Observable<any>;
  selectedNote: Observable<Note>;

  constructor(private notes: NotesService, private router: Router, private mdService: MarkdownService) {
  }


  ngOnInit() {
    // this.notes.loadNotesAndCategories();
    this.categories = this.notes.getCategoriesWithNotes();
    this.collapsedCategories = this.notes.getCollapsedCategories();

    this.selectedNote = this.notes.getSelectedNote();
  }

  toggleCategory(id) {
    this.notes.toggleCategory(id);
  }

  // selectNote(id) {
  //   this.notes.selectNote(id);
  // }

  showNote(id) {
    this.router.navigate(['/notes', id]);
  }

  displayDeleteCategoryConfirmation(id) {
    console.log('delete? ' + id);
  }

  editCategory(id) {
    console.log('edit: ' + id);
  }

}
