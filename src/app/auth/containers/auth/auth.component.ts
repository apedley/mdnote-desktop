import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../../reducers';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public url: Observable<string>;
  public mode = '';

  public formLoading: Observable<boolean>;

  constructor(public routerStore: Store<fromRoot.State>, private authService: AuthService) {
    this.formLoading = this.authService.getFormLoading();

    this.url = routerStore.select(fromRoot.getUrl);

    this.url.subscribe(url => {
      if (url.indexOf('signout') > 0) {
        this.authService.signout();
      }
      // console.log('url: ', url);
      if (url.indexOf('signin') > 0) {
        this.mode = 'signin';
      } else if (url.indexOf('signup') > 0) {
        this.mode = 'signup';
      } else {
        this.mode = '';
      }
    });
  }

  formSubmitted(data) {
    if (this.mode === 'signin') {
      this.authService.signin(data);
    }
    if (this.mode === 'signup') {
      this.authService.signup(data);
    }
  }

  ngOnInit() {
  }

}
