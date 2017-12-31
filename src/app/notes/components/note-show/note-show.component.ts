import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../note.model';

@Component({
  selector: 'app-note-show',
  templateUrl: './note-show.component.html',
  styleUrls: ['./note-show.component.scss']
})
export class NoteShowComponent implements OnInit {
  @Input() note: Note;
  @Output() shareNoteClicked = new EventEmitter<number>();
  @Output() deleteNoteClicked = new EventEmitter<number>();
  constructor() {}

  shareClicked(event) {
    console.dir(event);
    let id = this.note.id;
    if (typeof id === 'string') {
      id = parseInt(id, 10);
    }
    this.shareNoteClicked.emit(id);
  }

  deleteClicked(event) {
    console.dir(event);
    let id = this.note.id;
    if (typeof id === 'string') {
      id = parseInt(id, 10);
    }
    this.deleteNoteClicked.emit(id);
  }

  ngOnInit() {
  }

}
