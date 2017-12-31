import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { User } from '../../../auth/user.model';
import { Observable } from 'rxjs/Observable';
// import { ActivatedRoute } from '@angular/router';
import * as routerActions from '../../store/router-actions';
import * as fromRoot from '../../../reducers';
import { Store } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  public user: Observable<User>;
  public authenticated: Observable<boolean>;

  constructor(private auth: AuthService, private routerStore: Store<fromRouter.RouterReducerState<fromRoot.RouterStateUrl>>) {
    this.user = this.auth.getUser();
    this.authenticated = this.auth.getAuthenticated();

  }

  signOut() {
    debugger;
  }

  ngOnInit() {
  }

  backClicked(event) {
    this.routerStore.dispatch(new routerActions.Back());
  }

}
