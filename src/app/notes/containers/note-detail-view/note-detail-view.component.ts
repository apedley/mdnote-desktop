import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note } from '../../note.model';
import { NotesService } from '../../notes.service';

@Component({
  selector: 'app-note-detail-view',
  templateUrl: './note-detail-view.component.html',
  styleUrls: ['./note-detail-view.component.scss']
})
export class NoteDetailViewComponent implements OnInit {
  selectedNote: Observable<Note>;

  constructor(private notes: NotesService) {}

  ngOnInit() {
    this.selectedNote = this.notes.getRouteNote();
  }

  displayDeleteNoteConfirmation(id) {
    console.log('delete? ' + id);
  }

  shareNote(id) {
    console.log('share: ' + id);
  }
}
