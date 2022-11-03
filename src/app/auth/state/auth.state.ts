export interface AuthState {
  loading: boolean; //TODO: MOVE LOADING TO ROOT STATE
  errors: any;
  token: string | null
  userData: any
}
