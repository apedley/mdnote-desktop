import { Authenticate } from '../auth/user.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { environment } from '../../environments';
import { AuthService } from '../auth/auth.service';
import { forkJoin } from 'rxjs/observable/forkJoin';

import { Category, Note } from '../notes/note.model';

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

  getAllCategories() {
    const url = `${environment.apiBaseUrl}/categories`;
    const authHeader = `bearer ${this.authToken}`;

    return this.httpClient.get<[Category]>(url, {
      headers: new HttpHeaders().set('Authorization', authHeader)
    });

  }

  getNotesAndCategories() {
    const categoriesUrl = `${environment.apiBaseUrl}/categories`;
    const notesUrl = `${environment.apiBaseUrl}/notes`;
    const authHeader = `bearer ${this.authToken}`;

    const categoriesResult = this.httpClient.get<[Category]>(categoriesUrl, {
      headers: new HttpHeaders().set('Authorization', authHeader)
    });

    const notesResult = this.httpClient.get<[Note]>(notesUrl, {
      headers: new HttpHeaders().set('Authorization', authHeader)
    });

    return forkJoin([categoriesResult, notesResult], (categories, notes) => {
      return {
        categories,
        notes
      }
    });
  }

  createNote(note: Note) {
    const url = `${environment.apiBaseUrl}/notes`;
    const authHeader = `bearer ${this.authToken}`;

    const cleanNoteData = this._removeInvalidKeys(note);

    return this.httpClient.post<Note>(url, cleanNoteData, {
      headers: new HttpHeaders().set('Authorization', authHeader)
    });
  }

  updateNote(id: number, note: Note) {
    const url = `${environment.apiBaseUrl}/notes/${id}`;
    const authHeader = `bearer ${this.authToken}`;
    const cleanNoteData = this._removeInvalidKeys(note);

    return this.httpClient.patch<Note>(url, cleanNoteData, {
      headers: new HttpHeaders().set('Authorization', authHeader)
    });
  }

  createNoteShare(id: number) {
    const url = `${environment.apiBaseUrl}/notes/${id}/share`;
    const authHeader = `bearer ${this.authToken}`;

    return this.httpClient.post<Note>(url, {}, {
      headers: new HttpHeaders().set('Authorization', authHeader)
    });

  }

  private _removeInvalidKeys(dataObject: any) {
    return Object.keys(dataObject).reduce((prev, key) => {
      if (dataObject[key] && dataObject[key] !== 'null') {
        prev[key] = dataObject[key];
      }
      return prev;
    }, {});
  }

}
