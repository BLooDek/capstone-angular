import { createSelector } from '@ngrx/store';
import { selectModuleState } from './module.selectors';

export const selectUsers = createSelector(
  selectModuleState,
  (state) => state.users
);

export const selectLoading = createSelector(
  selectUsers,
  (state) => state.loading
);
export const selectErrors = createSelector(
  selectUsers,
  (state) => state.errors
);

export const selectTableData = createSelector(
  selectUsers,
  (state) => state.tableData
);
