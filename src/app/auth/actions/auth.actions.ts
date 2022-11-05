import {createAction, props} from "@ngrx/store";
import {ILoginPayload, IRegisterPayload, IUserToken} from "../models/auth.models";

export const RegisterUserAction = createAction('[Auth] Register User', props<IRegisterPayload>());
export const RegisterUserActionSuccess = createAction('[Auth] Register User Success', props<IUserToken>());
export const RegisterUserActionError = createAction('[Auth] Register User Error', props<{ error: any }>());

export const LoginUserAction = createAction('[Auth] Login User', props<ILoginPayload>());
export const LoginUserActionSuccess = createAction('[Auth] Login User Success', props<IUserToken>());
export const LoginUserActionError = createAction('[Auth] Login User Error', props<{ error: any }>());
