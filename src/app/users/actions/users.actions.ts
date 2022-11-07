import { createAction, props } from '@ngrx/store';
import { IUserData } from '../../shared/models/shared.models';
import { USERS_ACTIONS } from '../constants/users.const';

export const GetUsersDataAction = createAction(USERS_ACTIONS.GET_USERS_DATA);
export const GetUsersDataActionSuccess = createAction(
  USERS_ACTIONS.GET_USERS_DATA_SUCCESS,
  props<{ payload: IUserData[] }>()
);
export const GetUsersDataActionError = createAction(
  USERS_ACTIONS.GET_USERS_DATA_ERROR,
  props<{ error: any }>()
);
