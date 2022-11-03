import {ActionReducerMap} from "@ngrx/store";
import {IModuleState} from "../state/module.state";
import {authReducer} from "./auth.reducer";

export const AUTH_STORE_KEY = 'auth';
export const featureReducers: ActionReducerMap<IModuleState> = {
  auth: authReducer
}
