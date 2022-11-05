import { createAction, props } from '@ngrx/store';
import {
  ILoginPayload,
  IRegisterPayload,
  IUserData,
  IUserToken,
} from '../models/auth.models';

export const RegisterUserAction = createAction(
  '[Auth] Register User',
  props<IRegisterPayload>()
);
export const RegisterUserActionSuccess = createAction(
  '[Auth] Register User Success',
  props<IUserToken>()
);
export const RegisterUserActionError = createAction(
  '[Auth] Register User Error',
  props<{ error: any }>()
);

export const LoginUserAction = createAction(
  '[Auth] Login User',
  props<ILoginPayload>()
);
export const LoginUserActionSuccess = createAction(
  '[Auth] Login User Success',
  props<IUserToken>()
);
export const LoginUserActionError = createAction(
  '[Auth] Login User Error',
  props<{ error: any }>()
);

export const GetUserDataAction = createAction('[Auth] Get User Data');
export const GetUserDataActionSuccess = createAction(
  '[Auth] Get User Data Success',
  props<IUserData>()
);
export const GetUserDataActionError = createAction(
  '[Auth] Get User Data Error',
  props<{ error: any }>()
);
