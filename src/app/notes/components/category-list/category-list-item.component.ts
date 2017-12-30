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
        <app-note-list *ngIf="category.notes.length > 0"
          [notes]="category.notes"
          (noteClicked)="onNoteClicked($event)"
        ></app-note-list>
        <span *ngIf="category.notes.length < 1">
          Empty
        </span>
      </div>
    </div>
  `,
  styles: [`
  .card {
    margin-bottom: 20px;
  }
  `]
})
export class CategoryListItemComponent implements OnInit {
  @Input() category: Category;
  @Input() collapsed: boolean;
  @Output() categoryClicked = new EventEmitter<string | number>();
  @Output() noteClicked = new EventEmitter<string | number>();
  constructor() {}

  onCategoryClicked() {
    this.categoryClicked.emit(this.category.id);
  }

  onNoteClicked(id) {
    this.noteClicked.emit(id);
  }

  ngOnInit() {
  }

}
