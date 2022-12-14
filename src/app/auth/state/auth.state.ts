import { IUserData } from '../../shared/models/shared.models';

export interface AuthState {
  loading: boolean;
  errors: any;
  token: string | null;
  userData: IUserData | null;
}
