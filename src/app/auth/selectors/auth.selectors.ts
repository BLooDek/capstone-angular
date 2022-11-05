import { createSelector } from '@ngrx/store';
import { selectModuleState } from './module.selectors';

export const selectAuth = createSelector(
  selectModuleState,
  (state) => state.auth
);

export const selectLoading = createSelector(
  selectAuth,
  (state) => state.loading
);

export const selectErrors = createSelector(selectAuth, (state) => state.errors);

export const selectToken = createSelector(selectAuth, (state) => state.token);

export const selectUserData = createSelector(
  selectAuth,
  (state) => state.userData
);
