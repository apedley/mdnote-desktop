import { Authenticate } from '../auth/user.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { environment } from '../../environments';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class ApiService {
  public authToken: string;

  constructor(private httpClient: HttpClient, private authService: AuthService) {
    this.authService.getToken().subscribe( token => {
      this.authToken = token;
    });
  }

  signUp(userInfo: Authenticate) {
    const url = `${environment.apiBaseUrl}/signup`;

    return this.httpClient.post(url, userInfo);
  }

  signIn(userInfo: Authenticate) {
    const url = `${environment.apiBaseUrl}/signin`;

    return this.httpClient.post(url, userInfo);
  }
}
