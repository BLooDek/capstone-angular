export const AUTH_HEADER = 'Authorization';
export const AUTH_TOKEN = (token) => `Token ${token}`;
export const EMAIL_VALIDATION_PATTERN =
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
export const TOKEN_KEY = 'local-token';
export enum AUTH_ACTION_TYPES {
  REGISTER = '[Auth] Register User',
  REGISTER_SUCCESS = '[Auth] Register User Success',
  REGISTER_ERROR = '[Auth] Register User Error',
  LOGIN = '[Auth] Login User',
  LOGIN_SUCCESS = '[Auth] Login User Success',
  LOGIN_ERROR = '[Auth] Login User Error',
  GET_USER_DATA = '[Auth] Get User Data',
  GET_USER_DATA_SUCCESS = '[Auth] Get User Data Success',
  GET_USER_DATA_ERROR = '[Auth] Get User Data Error',
  LOGOUT_USER = '[Auth] Logout User',
  LOGOUT_USER_SUCCESS = '[Auth] Logout User Success',
  LOGOUT_USER_ERROR = '[Auth] Logout User Error',
  GET_TOKEN_ACTION = '[Auth] Get Token Action',
  GET_TOKEN_ACTION_SUCCESS = '[Auth] Get Token Action Success',
  GET_TOKEN_ACTION_ERROR = '[Auth] Get Token Action Error',
}
