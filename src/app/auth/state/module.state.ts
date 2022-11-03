import {AuthState} from "./auth.state";
import {initialAuthState} from "../reducers/auth.reducer";

export interface IModuleState {
  auth: AuthState;
}
export const initialModuleState: IModuleState = {
  auth: initialAuthState
}
