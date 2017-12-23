import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { User } from '../../../auth/user.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
