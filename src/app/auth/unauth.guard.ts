
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';


@Injectable()
export class UnauthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate() {
    return this.authService.getAuthenticated().pipe(
      tap(authStatus => {
        debugger;
        if (authStatus) {
          this.router.navigate(['/']);
          return false;
        } else {
          // this.authService.loadLocalData();
          return true;
        }
      })
    )
  }
}

