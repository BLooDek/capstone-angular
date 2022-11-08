import { ActionReducerMap } from '@ngrx/store';
import { IModuleState } from '../state/module.state';
import { notebookReducers } from './notebook.reducers';

export const NOTEBOOK_STORE_KEY = 'notebook';
export const featureReducers: ActionReducerMap<IModuleState> = {
  notebook: notebookReducers,
};
