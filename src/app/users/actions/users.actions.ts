import { createAction, props } from '@ngrx/store';
import { IUserData } from '../../shared/models/shared.models';

export enum USERS_ACTIONS {
  GET_USERS_DATA = '[Users] Get Users Data',
  GET_USERS_DATA_SUCCESS = '[Users] Get Users Data Success',
  GET_USERS_DATA_ERROR = '[Users] Get Users Data Error',
}

export const GetUsersDataAction = createAction(USERS_ACTIONS.GET_USERS_DATA);
export const GetUsersDataActionSuccess = createAction(
  USERS_ACTIONS.GET_USERS_DATA_SUCCESS,
  props<{ payload: IUserData[] }>()
);
export const GetUsersDataActionError = createAction(
  USERS_ACTIONS.GET_USERS_DATA_ERROR,
  props<{ error: any }>()
);
