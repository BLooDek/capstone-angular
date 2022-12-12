import { createAction, props } from '@ngrx/store';
import {
  ILoginPayload,
  IRegisterPayload,
  IUserToken,
} from '../models/auth.interface';
import { AUTH_ACTION_TYPES } from '../contants/auth.const';
import { IUserData } from '../../shared/models/shared.models';

export const RegisterUserAction = createAction(
  AUTH_ACTION_TYPES.REGISTER,
  props<IRegisterPayload>()
);
export const RegisterUserActionSuccess = createAction(
  AUTH_ACTION_TYPES.REGISTER_SUCCESS,
  props<IUserToken>()
);
export const RegisterUserActionError = createAction(
  AUTH_ACTION_TYPES.REGISTER_ERROR,
  props<{ error: any }>()
);

export const LoginUserAction = createAction(
  AUTH_ACTION_TYPES.LOGIN,
  props<ILoginPayload>()
);
export const LoginUserActionSuccess = createAction(
  AUTH_ACTION_TYPES.LOGIN_SUCCESS,
  props<IUserToken>()
);
export const LoginUserActionError = createAction(
  AUTH_ACTION_TYPES.LOGIN_ERROR,
  props<{ error: any }>()
);

export const GetUserDataAction = createAction(AUTH_ACTION_TYPES.GET_USER_DATA);
export const GetUserDataActionSuccess = createAction(
  AUTH_ACTION_TYPES.GET_USER_DATA_SUCCESS,
  props<IUserData>()
);
export const GetUserDataActionError = createAction(
  AUTH_ACTION_TYPES.GET_USER_DATA_ERROR,
  props<{ error: any }>()
);

export const LogoutUserAction = createAction(AUTH_ACTION_TYPES.LOGOUT_USER);
export const LogoutUserActionSuccess = createAction(
  AUTH_ACTION_TYPES.LOGOUT_USER_SUCCESS
);
export const LogoutUserActionError = createAction(
  AUTH_ACTION_TYPES.LOGOUT_USER_ERROR,
  props<{ error: any }>()
);
export const GetTokenAction = createAction(AUTH_ACTION_TYPES.GET_TOKEN_ACTION);
export const GetTokenActionSuccess = createAction(
  AUTH_ACTION_TYPES.GET_TOKEN_ACTION_SUCCESS,
  props<IUserToken>()
);
export const GetTokenActionError = createAction(
  AUTH_ACTION_TYPES.GET_TOKEN_ACTION_ERROR,
  props<{ error: any }>()
);
