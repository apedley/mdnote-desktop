import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../../reducers';
import { AuthService } from '../../auth.service';
import { takeLast, take, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import { Authenticate } from '../../user.model';

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

    });
  }

  formSubmitted(data: {mode: string, formValue: Authenticate}) {
    if (data.mode === '/signup') {
      this.authService.signup(data.formValue);
    } else if (data.mode === '/signin') {
      this.authService.signin(data.formValue);
    }
  }

  ngOnInit() {
  }


}
