import { createAction, props } from '@ngrx/store';
import { NOTEBOOK_ACTION_TYPES } from '../constants/notebook.const';
import { INote, INotePayload } from '../models/notebook.interface';

export const GetNotesAction = createAction(
  NOTEBOOK_ACTION_TYPES.GET_NOTES_ACTION
);
export const GetNotesActionSuccess = createAction(
  NOTEBOOK_ACTION_TYPES.GET_NOTES_ACTION_SUCCESS,
  props<{ notes: INote[] }>()
);
export const GetNotesActionError = createAction(
  NOTEBOOK_ACTION_TYPES.GET_NOTES_ACTION_ERROR,
  props<{ error: any }>()
);

export const AddNoteAction = createAction(
  NOTEBOOK_ACTION_TYPES.ADD_NOTE_ACTION,
  props<INotePayload>()
);
export const AddNoteActionSuccess = createAction(
  NOTEBOOK_ACTION_TYPES.ADD_NOTE_ACTION_SUCCESS,
  props<{ note: INote }>()
);
export const AddNoteActionError = createAction(
  NOTEBOOK_ACTION_TYPES.ADD_NOTE_ACTION_ERROR,
  props<{ error: any }>()
);
