import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../note.model';

@Component({
  selector: 'app-note-list',
  template: `
    <table class="table table-hover table-sm">
      <tbody>
        <tr *ngFor="let note of notes" (click)="onNoteClicked(note.id)">
          <td>{{ note.title }}</td>
          <td>{{ getNoteSummary(note) }}</td>
          <td>{{ note.updated_at | date:'short' }}
        </tr>
      </tbody>
    </table>
  `,
  styles: [`
  td {
    border-top: 0;
  }
  `]
})
export class NoteListComponent implements OnInit {
  @Input() notes: Note[];
  @Output() noteClicked = new EventEmitter<string | number>();

  constructor() {}

  ngOnInit() {
  }

  getNoteSummary(note: Note) {
    const body = note.body;

    if (body.length < 38) {
      return body;
    }

    return body.substr(0, 35).trim() + '...';
  }

  onNoteClicked(id) {
    this.noteClicked.emit(id);
  }

}
