import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, map, Observable, throwError} from "rxjs";
import {ConstService} from "../../shared/services/const.service";
import {IUserToken} from "../models/auth.models";



@Injectable()
export class AuthService {
  constructor(private _http: HttpClient, private _const: ConstService) {
  }

  registerUser(payload): Observable<IUserToken> {
    const url = `${this._const.API_URL}auth/register/`
    return this._http.post<IUserToken>(url, payload).pipe(
      map(data => data),
      catchError(e => throwError(()=> e) )
    )
  }

  loginUser(payload): Observable<IUserToken> {
    const url = `${this._const.API_URL}auth/login/`
    return this._http.post<IUserToken>(url, payload).pipe(
      map(data => data),
      catchError(e => throwError(()=> e) )
    )
  }
}
