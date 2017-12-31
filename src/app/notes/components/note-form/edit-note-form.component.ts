import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Note, Category } from '../../note.model';

@Component({
  selector: 'app-edit-note-form',
  templateUrl: './edit-note-form.component.html',
  styles: [`
  .form-control {
    font-size: .85rem;
  }
  #noteBody {
    height: 50vh;
  }
  `]
})
export class EditNoteFormComponent implements OnInit {
  @Input() categories: Category[];
  @Input() initialData: Observable<Note>;

  @Output() formSubmitted = new EventEmitter<any>();
  @Output() bodyChanged = new EventEmitter<string>();

  noteForm: FormGroup;
  formLoading = false;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.noteForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      body: ['', [Validators.required, Validators.minLength(3)]],
      categoryId: ['0']
    });

    if (!this.initialData) {
      return;
    }
    this.initialData.subscribe((note) => {
      if (!note) { return; }
      this.noteForm.controls['title'].setValue(note.title);
      this.noteForm.controls['body'].setValue(note.body);
      this.noteForm.controls['categoryId'].setValue(note.categoryId);
    });

  }

  onFormSubmitted() {
    this.formLoading = true;
    this.formSubmitted.emit(this.noteForm.value);
  }

  onBodyChanged(body) {
    this.bodyChanged.emit(body);
  }

}
