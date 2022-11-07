import { UsersState } from './users.state';
import { initialUsersState } from '../reducers/users.reducers';

export interface IModuleState {
  users: UsersState;
}
export const initialModuleState: IModuleState = {
  users: initialUsersState,
};
