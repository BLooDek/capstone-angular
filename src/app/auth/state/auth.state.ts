import { IUserData } from '../models/auth.models';

export interface AuthState {
  loading: boolean;
  errors: any;
  token: string | null;
  userData: IUserData | null;
}
