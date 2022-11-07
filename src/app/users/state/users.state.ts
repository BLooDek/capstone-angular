import { IUserData } from '../../shared/models/shared.models';

export interface UsersState {
  loading: boolean;
  errors: any;
  tableData: IUserData[];
}
