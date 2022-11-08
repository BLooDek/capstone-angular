import { INote } from '../models/notebook.interface';

export interface NotebookState {
  loading: boolean;
  errors: any;
  notes: INote[];
}
