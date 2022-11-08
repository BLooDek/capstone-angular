import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ConstService } from '../../shared/services/const.service';
import { IAuthStatus, IUserToken } from '../models/auth.interface';
import { IUserData } from '../../shared/models/shared.models';

@Injectable()
export class AuthService {
  constructor(private _http: HttpClient, private _const: ConstService) {}

  registerUser(payload): Observable<IUserToken> {
    const url = `${this._const.API_URL}auth/register/`;
    return this._http.post<IUserToken>(url, payload).pipe(
      map((data) => data),
      catchError((e) => throwError(() => e))
    );
  }

  loginUser(payload): Observable<IUserToken> {
    const url = `${this._const.API_URL}auth/login/`;
    return this._http.post<IUserToken>(url, payload).pipe(
      map((data) => data),
      catchError((e) => throwError(() => e))
    );
  }

  getUserData(): Observable<IUserData> {
    const url = `${this._const.API_URL}auth/user/`;
    return this._http.get<IUserData>(url).pipe(
      map((data) => data),
      catchError((e) => throwError(() => e))
    );
  }

  logoutUser(): Observable<IAuthStatus> {
    const url = `${this._const.API_URL}auth/logout/`;
    return this._http.post<IAuthStatus>(url, {}).pipe(
      map((data) => data),
      catchError((e) => throwError(() => e))
    );
  }
  checkIfEmailExist(email): Observable<IAuthStatus> {
    const url = `${this._const.API_URL}auth/valid/${email}`;
    return this._http.get<IAuthStatus>(url).pipe(
      map((data) => data),
      catchError((e) => throwError(() => e))
    );
  }
}
