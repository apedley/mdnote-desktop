import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../note.model';

@Component({
  selector: 'app-category-list-item',
  templateUrl: './category-list-item.component.html',
  styleUrls: [ './category-list-item.component.scss' ]
})
export class CategoryListItemComponent implements OnInit {
  @Input() category: Category;
  @Input() collapsed: boolean;
  @Output() categoryClicked = new EventEmitter<string | number>();
  @Output() noteClicked = new EventEmitter<string | number>();
  @Output() categoryEditClicked = new EventEmitter<number>();
  @Output() categoryDeleteClicked = new EventEmitter<number>();
  constructor() {}

  onCategoryClicked() {
    this.categoryClicked.emit(this.category.id);
  }

  onNoteClicked(id) {
    this.noteClicked.emit(id);
  }


  onCategoryEditClicked(id) {
    this.categoryEditClicked.emit(parseInt(id, 10));
  }

  onCategoryDeleteClicked(id) {
    this.categoryDeleteClicked.emit(parseInt(id, 10));
  }

  ngOnInit() {
  }

}
