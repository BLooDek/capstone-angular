import {createAction, props} from "@ngrx/store";

export const RegisterUserAction = createAction('[Auth] Register User', props<{ payload: any }>());

export const RegisterUserActionSuccess = createAction('[Auth] Register User Success', props<{ token: string }>());

export const RegisterUserActionError = createAction('[Auth] Register User Error', props<{ error: any }>());
