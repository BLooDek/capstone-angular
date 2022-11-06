export interface IUserData {
  email: string;
  name: string;
  is_staff: boolean;
  is_superuser: boolean;
  is_active: boolean;
  last_login: Date;
  date_joined: Date;
}
export interface IUserToken {
  key: string;
}
export interface IRegisterPayload {
  email: string;
  password1: string;
  password2: string;
}
export interface ILoginPayload {
  email: string;
  password: string;
}
export interface IAuthStatus {
  detail: string;
}

/*
email	"admin@admin.com"
name	null
is_staff	false
is_superuser	false
is_active	true
last_login	"2022-11-06T00:48:03.030146Z"
date_joined	"2022-11-05T19:10:29.926355Z"
* */
