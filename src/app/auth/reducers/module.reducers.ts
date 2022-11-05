import {ActionReducerMap} from "@ngrx/store";
import {IModuleState} from "../state/module.state";
import {authReducers} from "./auth.reducers";

export const AUTH_STORE_KEY = 'auth';
export const featureReducers: ActionReducerMap<IModuleState> = {
  auth: authReducers
}
