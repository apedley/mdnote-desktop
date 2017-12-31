import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { User } from '../../../auth/user.model';
// import { Observable } from 'rxjs/Observable';
// import { Store } from '@ngrx/store';
// import * as ui from '../../store/ui-actions';
// import * as fromUi from '../../store/ui-reducer';
// import * as fromRoot from '../../../reducers';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @Input() title: string;
  // public title: Observable<string>;

  // constructor(private uiStore: Store<fromUi.State>) {
    // this.title = this.uiStore.select(fromRoot.selectTitle);
  // }

  constructor() {

  }

  ngOnInit() {

  }

}
