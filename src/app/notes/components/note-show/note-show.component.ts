import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../note.model';

// <div class="card">
//   <div class="card-body">
//     <h5 class="card-title">{{ note.title }}</h5>
//     <h6 class="card-subtitle mb-2 text-muted">{{ note.updated_at | date:'short' }}</h6>
//     <markdown [data]="note.body"></markdown>
//   </div>
// </div>
@Component({
  selector: 'app-note-show',
  template: `
  <div>
    <h3>{{ note.title }}</h3>
    <markdown [data]="note.body">
    </markdown>
  </div>
  `,
  styles: [``]
})
export class NoteShowComponent implements OnInit {
  @Input() note: Note;

  constructor() {}

  ngOnInit() {
  }

}
