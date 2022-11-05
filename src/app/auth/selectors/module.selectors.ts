import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { IModuleState } from '../state/module.state';
import { AUTH_STORE_KEY } from '../reducers/module.reducers';

export const selectModuleState: MemoizedSelector<object, IModuleState> =
  createFeatureSelector<IModuleState>(AUTH_STORE_KEY);
