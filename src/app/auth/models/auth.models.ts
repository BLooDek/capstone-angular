export interface IUserData {
  email: string
}
export interface IUserToken {
  key: string
}
export interface IRegisterPayload {
  email: string;
  password1: string;
  password2: string;
}
export interface ILoginPayload {
  email: string,
  password: string
}
