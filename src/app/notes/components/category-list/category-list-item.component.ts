import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../note.model';
import { trigger, state, style, animate, transition, AUTO_STYLE } from "@angular/animations";

@Component({
  selector: 'app-category-list-item',
  templateUrl: './category-list-item.component.html',
  styleUrls: [ './category-list-item.component.scss' ],
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        // style({ transform: 'translateY(-100%)', opacity: 0}),
        // style({ transform: 'scale(0)', opacity: 0}),
        style({ height: '0'}),
        // animate('500ms', style({transform: 'translateY(0)', 'opacity': 1}))
        // animate('500ms', style({transform: 'scale(1)', 'opacity': 1}))
        animate('100ms', style({height: '*'}))
      ]),
      transition(':leave', [
        // style({transform: 'translateY(0)', 'opacity': 1}),
        // style({transform: 'scale(1)', 'opacity': 1}),
        style({height: '*'}),
        // animate('500ms', style({transform: 'scale(0)', 'opacity': 0}))
        animate('100ms', style({height: '0'}))
      ])
    ])
  ]
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
