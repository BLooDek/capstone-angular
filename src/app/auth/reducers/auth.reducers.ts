import { AuthState } from '../state/auth.state';
import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export const initialAuthState: AuthState = {
  loading: false,
  errors: null,
  token: null,
  userData: null,
};

export const authReducers = createReducer<AuthState>(
  initialAuthState,
  on(
    AuthActions.RegisterUserAction,
    AuthActions.LoginUserAction,
    AuthActions.GetUserDataAction,
    AuthActions.LogoutUserAction,
    AuthActions.GetTokenAction,
    (state) => ({ ...state, loading: true })
  ),

  on(
    AuthActions.RegisterUserActionSuccess,
    AuthActions.LoginUserActionSuccess,
    AuthActions.GetTokenActionSuccess,
    (state, payload) => ({
      ...state,
      loading: false,
      token: payload.key,
    })
  ),
  on(AuthActions.LogoutUserActionSuccess, (state) => ({
    ...state,
    token: null,
    userData: null,
    loading: false,
  })),

  on(
    AuthActions.RegisterUserActionError,
    AuthActions.LoginUserActionError,
    AuthActions.LogoutUserActionError,
    AuthActions.GetTokenActionError,
    (state, payload) => ({
      ...state,
      loading: false,
      errors: payload.error,
    })
  ),
  on(AuthActions.GetUserDataActionError, (state, payload) => ({
    ...state,
    loading: false,
    errors: payload.error,
    token: null,
  })),

  on(AuthActions.GetUserDataActionSuccess, (state, payload) => ({
    ...state,
    loading: false,
    userData: payload,
  }))
);
