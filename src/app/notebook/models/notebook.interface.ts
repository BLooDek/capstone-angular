export interface INote {
  id: string;
  title: string;
  body: string;
  created_at: Date | string;
  updated_at: Date | string;
  is_published: boolean;
  author: string;
}

export interface INotePayload {
  title: string;
  body: string;
}
