import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../note.model';

// <div class="card-body" *ngIf="collapsedCategories[category.id] &&  collapsedCategories[category.id] === true">
@Component({
  selector: 'app-category-list-item',
  template: `
    <div class="card">
      <div class="card-header" role="tab" (click)="onCategoryClicked()">
        {{ category.name }}
      </div>
      <div class="card-body" *ngIf="!collapsed">
        notes: {{ category.notes.length }}
      </div>
    </div>
  `,
  styles: [``]
})
export class CategoryListItemComponent implements OnInit {
  @Input() category: Category;
  @Input() collapsed: boolean;
  @Output() categoryClicked = new EventEmitter<string | number>();

  constructor() {}

  onCategoryClicked() {
    this.categoryClicked.emit(this.category.id);
  }

  ngOnInit() {
  }

}
