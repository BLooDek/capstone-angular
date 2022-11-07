import { IUserData } from '../../shared/models/shared.models';

export const USER_TABLE_COLUMNS: (keyof IUserData)[] = [
  'email',
  'name',
  'is_staff',
  'is_superuser',
  'is_active',
  'last_login',
  'date_joined',
];
export enum USERS_ACTIONS {
  GET_USERS_DATA = '[Users] Get Users Data',
  GET_USERS_DATA_SUCCESS = '[Users] Get Users Data Success',
  GET_USERS_DATA_ERROR = '[Users] Get Users Data Error',
}
