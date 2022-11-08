import { createSelector } from '@ngrx/store';
import { selectModuleState } from './module.selectors';

export const selectNotebook = createSelector(
  selectModuleState,
  (state) => state.notebook
);

export const selectLoading = createSelector(
  selectNotebook,
  (state) => state.loading
);
export const selectErrors = createSelector(
  selectNotebook,
  (state) => state.errors
);
export const selectNotes = createSelector(
  selectNotebook,
  (state) => state.notes
);
