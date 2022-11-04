import {createAction, props} from "@ngrx/store";
import {IRegisterPayload, IUserToken} from "../models/auth.models";

export const RegisterUserAction = createAction('[Auth] Register User', props<IRegisterPayload>());

export const RegisterUserActionSuccess = createAction('[Auth] Register User Success', props<IUserToken>());

export const RegisterUserActionError = createAction('[Auth] Register User Error', props<{ error: any }>());
