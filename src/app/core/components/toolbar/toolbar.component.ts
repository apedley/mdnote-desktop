import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../auth/user.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() title: string;
  @Input() user: User;
  @Output() backClicked = new EventEmitter<void>();
  @Output() reloadClicked = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {
  }

  onBackClicked() {
    this.backClicked.emit();
  }

  onReloadClicked(event) {
    this.reloadClicked.emit();
  }

}
