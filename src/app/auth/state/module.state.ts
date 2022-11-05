import { AuthState } from './auth.state';
import { initialAuthState } from '../reducers/auth.reducers';

export interface IModuleState {
  auth: AuthState;
}
export const initialModuleState: IModuleState = {
  auth: initialAuthState,
};
