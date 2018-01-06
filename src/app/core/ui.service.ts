
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromUi from './store/ui-reducer';
import { Share } from '../notes/note.model';

@Injectable()
export class UiService {
  constructor(private uiStore: Store<fromUi.State>) {}

  displayShare(share: Share) {
    debugger;
  }
}
