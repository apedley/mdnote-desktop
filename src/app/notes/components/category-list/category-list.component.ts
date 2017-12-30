import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../note.model';

@Component({
  selector: 'app-category-list',
  template: `
    <app-category-list-item *ngFor="let category of categories"
      [category]="category"
      [collapsed]="categoriesCollapsed[category.id] === true"
      (categoryClicked)="onCategoryClicked($event)"
      (noteClicked)="onNoteClicked($event)"
    >
    </app-category-list-item>
  `,
  styles: [``]
})
export class CategoryListComponent implements OnInit {
  @Input() categories: Category[];
  @Input() categoriesCollapsed: any;
  @Output() categoryClicked = new EventEmitter<string | number>();
  @Output() noteClicked = new EventEmitter<string | number>();
  constructor() {}

  onCategoryClicked(id) {
    this.categoryClicked.emit(id);
  }

  onNoteClicked(id) {
    this.noteClicked.emit(id);
  }

  ngOnInit() {
  }

}
