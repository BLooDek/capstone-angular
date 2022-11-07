import { IModuleState } from '../state/module.state';
import { ActionReducerMap } from '@ngrx/store';
import { usersReducers } from './users.reducers';

export const USERS_STORE_KEY = 'users';
export const featureReducers: ActionReducerMap<IModuleState> = {
  users: usersReducers,
};
