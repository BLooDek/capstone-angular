import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { IModuleState } from '../state/module.state';
import { USERS_STORE_KEY } from '../reducers/module.reducers';

export const selectModuleState: MemoizedSelector<object, IModuleState> =
  createFeatureSelector<IModuleState>(USERS_STORE_KEY);
