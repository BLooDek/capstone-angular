import {AuthState} from "../state/auth.state";
import {createReducer, on} from "@ngrx/store";
import * as authActions from '../actions/auth.action'

export const initialAuthState: AuthState = {
  loading: false,
  errors: null,
  token: null,
  userData: null
}

export const authReducer = createReducer<AuthState>(initialAuthState,
  on(authActions.RegisterUserAction, state => ({...state, loading: true})),

  on(authActions.RegisterUserActionSuccess, state => ({...state, loading: false})),

  on(authActions.RegisterUserActionError, state => ({...state, loading: false})))

