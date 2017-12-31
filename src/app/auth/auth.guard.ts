
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate() {
    return this.authService.getAuthenticated().pipe(
      tap(authStatus => {
        if (!authStatus) {
          // debugger;
          this.authService.loadLocalData();
          // this.router.navigate(['/signin']);
          return false;
        } else {
          return true;
        }
      })
    )
  }
}

