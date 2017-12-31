import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../note.model';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list-component.html',
  styleUrls: ['./note-list-component.scss']
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
