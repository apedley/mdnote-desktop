
export interface Category {
  name: string;
  userId?: string;
  created_at?: string;
  updated_at?: string;
  id?: string | number;
  description?: string;
  notes?: Note[];
}

export interface Note {
  title: string;
  body?: string;
  preview?: string;
  created_at?: string;
  updated_at?: string;
  id?: string | number;
  categoryId?: string | number;
  category?: Category;
}

export interface Share {
  title: string;
  body: string;
  id: number;
  url: string;
  created_at?: string;
  updated_at?: string;
  noteId?: number;
  userId?: number;
}
