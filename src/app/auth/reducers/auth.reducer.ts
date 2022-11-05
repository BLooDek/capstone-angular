import {AuthState} from "../state/auth.state";
import {createReducer, on} from "@ngrx/store";
import * as AuthActions from '../actions/auth.actions'

export const initialAuthState: AuthState = {
  loading: false,
  errors: null,
  token: null,
  userData: null
}

export const authReducer = createReducer<AuthState>(initialAuthState,
  on(AuthActions.RegisterUserAction, AuthActions.LoginUserAction, state => ({...state, loading: true})),

  on(AuthActions.RegisterUserActionSuccess, AuthActions.RegisterUserActionSuccess, (state, payload) => {
    console.log(payload);
    return {...state, loading: false, token: payload.key}
  }),

  on(AuthActions.RegisterUserActionError, AuthActions.LoginUserActionError, (state, payload) => {
    console.log(payload);
    return {...state, loading: false, errors: payload.error}
  })
)

