import {Component, Input} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Share } from '../../../notes/note.model';
import {environment} from '../../../../environments';
import { ElectronService } from '../../electron.service';

@Component({
  selector: 'app-share-url-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" (click)="openFullUrl()">
      {{ fullUrl() }}
    </div>
    <div (click)="copyFullUrl()">
      Copy to Clipboard
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class ShareUrlModalComponent {
  @Input() share: Share;

  fullUrl() {
    return `${environment.shareBaseUrl}/${this.share.url}`;
  }

  openFullUrl() {
    this.electron.openURLInBrowser(this.fullUrl());
  }

  copyFullUrl() {
    this.electron.saveToClipboard(this.fullUrl());
  }
  constructor(public activeModal: NgbActiveModal, public electron: ElectronService) {}
}
