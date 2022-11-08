import { UsersState } from '../state/users.state';
import { createReducer, on } from '@ngrx/store';
import * as UsersActions from '../actions/users.actions';

export const initialUsersState: UsersState = {
  loading: false,
  errors: null,
  tableData: null,
};

export const usersReducers = createReducer<UsersState>(
  initialUsersState,
  on(UsersActions.GetUsersDataAction, (state) => ({ ...state, loading: true })),

  on(UsersActions.GetUsersDataActionSuccess, (state, { payload }) => ({
    ...state,
    loading: false,
    tableData: payload,
  })),

  on(UsersActions.GetUsersDataActionError, (state, payload) => ({
    ...state,
    loading: false,
    errors: payload.error,
  }))
);
