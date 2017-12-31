import { Action } from '@ngrx/store';
import {  } from '@ngrx/entity';
import { Note, Category } from '../note.model';

export const FETCH_NOTES = '[Notes] Fetch Notes';
export const FETCH_NOTES_SUCCESS = '[Notes] Fetch Notes Success';
export const FETCH_NOTES_FAILURE = '[Notes] Fetch Notes Failure';

export const FETCH_CATEGORIES = '[Categories] Fetch Categories';
export const FETCH_CATEGORIES_SUCCESS = '[Categories] Fetch Categories Success';
export const FETCH_CATEGORIES_FAILURE = '[Categories] Fetch Categories Failure';

export const FETCH_NOTES_AND_CATEGORIES = '[Notes] Fetch Notes And Categories';
export const REFETCH_NOTES_AND_CATEGORIES = '[Notes] Reetch Notes And Categories';
export const FETCH_NOTES_AND_CATEGORIES_SUCCESS = '[Notes] Fetch Notes And Categories Success';
export const FETCH_NOTES_AND_CATEGORIES_FAILURE = '[Notes] Fetch Notes And Categories Failure';

export const SELECT_CATEGORY = '[Categories] Select';
export const SELECT_NOTE = '[Notes] Select';

export const TOGGLE_CATEGORY = '[Categories] Toggle';

export const CREATE_NOTE = '[Notes] Create Note';
export const CREATE_NOTE_SUCCESS = '[Notes] Create Note Success';
export const CREATE_NOTE_FAILURE = '[Notes] Create Note Failure';

export const UPDATE_NOTE = '[Notes] Update Note';
export const UPDATE_NOTE_SUCCESS = '[Notes] Update Note Success';
export const UPDATE_NOTE_FAILURE = '[Notes] Update Note Failue';

export const CREATE_CATEGORY = '[Categories] Create Category';
export const CREATE_CATEGORY_SUCCESS = '[Categories] Create Category Success';
export const CREATE_CATEGORY_FAILURE = '[Categories] Create Category Failure';



export class FetchNotes implements Action {
  readonly type = FETCH_NOTES;
}

export class FetchNotesSuccess implements Action {
  readonly type = FETCH_NOTES_SUCCESS;
  constructor(public payload: Note[]) {}
}

export class FetchNotesFailure implements Action {
  readonly type = FETCH_NOTES_FAILURE;

  constructor(public payload: any) {}
}

export class FetchCategories implements Action {
  readonly type = FETCH_CATEGORIES;
}

export class FetchCategoriesSuccess implements Action {
  readonly type = FETCH_CATEGORIES_SUCCESS;
  constructor(public payload: Category[]) {}
}

export class FetchCategoriesFailure implements Action {
  readonly type = FETCH_CATEGORIES_FAILURE;

  constructor(public payload: any) {}
}


export class FetchNotesAndCategories implements Action {
  readonly type = FETCH_NOTES_AND_CATEGORIES;
}


export class RefetchNotesAndCategories implements Action {
  readonly type = REFETCH_NOTES_AND_CATEGORIES;
}

export class FetchNotesAndCategoriesSuccess implements Action {
  readonly type = FETCH_NOTES_AND_CATEGORIES_SUCCESS;
  constructor(public payload: {
    notes: Note[],
    categories: Category[]
  }) {}
}

export class FetchNotesAndCategoriesFailure implements Action {
  readonly type = FETCH_NOTES_AND_CATEGORIES_FAILURE;

  constructor(public payload: any) {}
}

export class SelectCategory implements Action {
  readonly type = SELECT_CATEGORY;

  constructor(public payload: string) {}
}

export class ToggleCategory implements Action {
  readonly type = TOGGLE_CATEGORY;

  constructor(public payload: string) {}
}


export class SelectNote implements Action {
  readonly type = SELECT_NOTE;

  constructor(public payload: string) {}
}

export class CreateNote implements Action {
  readonly type = CREATE_NOTE;

  constructor(public payload: Note) {}
}

export class CreateNoteSuccess implements Action {
  readonly type = CREATE_NOTE_SUCCESS;

  constructor(public payload: Note) {}
}

export class CreateNoteFailure implements Action {
  readonly type = CREATE_NOTE_FAILURE;

  constructor(public errors: string[]) {}
}


export class UpdateNote implements Action {
  readonly type = UPDATE_NOTE;

  constructor(public id: number, public payload: Note) {}
}

export class UpdateNoteSuccess implements Action {
  readonly type = UPDATE_NOTE_SUCCESS;

  constructor(public payload: { note: Note, id: number }) {}
}

export class UpdateNoteFailure implements Action {
  readonly type = UPDATE_NOTE_FAILURE;

  constructor(public errors: string[]) {}
}

export class CreateCategory implements Action {
  readonly type = CREATE_CATEGORY;

  constructor(public payload: Category) {}
}

export class CreateCategorySuccess implements Action {
  readonly type = CREATE_CATEGORY_SUCCESS;

  constructor(public payload: Category) {}
}

export class CreateCategoryFailure implements Action {
  readonly type = CREATE_CATEGORY_FAILURE;

  constructor(public errors: string[]) {}
}

export type actions =
  FetchNotes |
  FetchNotesSuccess |
  FetchNotesFailure |
  FetchCategories |
  FetchCategoriesSuccess |
  FetchCategoriesFailure |
  FetchNotesAndCategories |
  FetchNotesAndCategoriesSuccess |
  FetchNotesAndCategoriesFailure |
  RefetchNotesAndCategories |
  SelectCategory |
  ToggleCategory |
  SelectNote |
  CreateNote |
  CreateNoteSuccess |
  CreateNoteFailure |
  UpdateNote |
  UpdateNoteSuccess |
  UpdateNoteFailure |
  CreateCategory |
  CreateCategorySuccess |
  CreateCategoryFailure;
