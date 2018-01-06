import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { map, tap, switchMap, catchError, mergeMap } from 'rxjs/operators';
import * as ui from './ui-actions';
import * as notes from '../../notes/store/actions';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { ShareUrlModalComponent } from '../components/modals/share-url-modal.component';


@Injectable()
export class UiEffects {
  public shareModalRef: NgbModalRef;

  @Effect()
  setTitle = this.actions.ofType(ui.SET_TITLE).pipe(
    map((action: ui.SetTitle) => {
      debugger;
    })
  )

  @Effect({dispatch: false})
  displayShare = this.actions.ofType(notes.CREATE_NOTE_SHARE_SUCCESS).pipe(
    map((action: notes.CreateNoteShareSuccess) => {
      const share = action.payload;

      this.shareModalRef = this.modalService.open(ShareUrlModalComponent);
      this.shareModalRef.componentInstance.share = share;

    })
  )
  constructor(private actions: Actions, private modalService: NgbModal) { }
}
