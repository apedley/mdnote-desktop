import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { User } from '../../../auth/user.model';
import { Observable } from 'rxjs/Observable';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user: Observable<User>;
  public authenticated: Observable<boolean>;

  constructor(private auth: AuthService) {
    this.user = this.auth.getUser();
    this.authenticated = this.auth.getAuthenticated();
  }

  signOut() {
    debugger;
  }

  ngOnInit() {
  }

}
