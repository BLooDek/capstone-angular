import { createReducer, on } from '@ngrx/store';
import { NotebookState } from '../state/nootebook.state';
import * as NotebookActions from '../actions/notebook.actions';

export const initialNotebookState: any = {
  loading: false,
  errors: false,
  notes: null,
};

export const notebookReducers = createReducer<NotebookState>(
  initialNotebookState,
  on(
    NotebookActions.GetNotesAction,
    NotebookActions.AddNoteAction,
    (state) => ({ ...state, loading: true })
  ),
  on(NotebookActions.AddNoteActionSuccess, (state, { note }) => ({
    ...state,
    loading: false,
    notes: [note, ...(state.notes ? state.notes : [])],
  })),
  on(NotebookActions.GetNotesActionSuccess, (state, { notes }) => ({
    ...state,
    loading: false,
    notes: notes,
  })),
  on(
    NotebookActions.AddNoteActionError,
    NotebookActions.GetNotesActionError,
    (state, payload) => ({
      ...state,
      loading: false,
      errors: payload.error,
    })
  )
);