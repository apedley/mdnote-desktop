import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { NotesService } from '../../notes.service';
import { Category, Note } from '../../note.model';

@Component({
  selector: 'app-compose-note',
  templateUrl: './compose-note.component.html',
  styleUrls: ['./compose-note.component.scss']
})
export class ComposeNoteComponent implements OnInit {

  categories: Observable<Category[]>;
  body = '';

  constructor(private notes: NotesService) {}

  ngOnInit() {
    this.categories = this.notes.getCategories();
  }

  bodyChanged(value) {
    this.body = value;
  }

  formSubmitted(value) {
    this.notes.createNote(value);
  }

}
