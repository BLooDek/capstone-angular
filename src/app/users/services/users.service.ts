import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstService } from '../../shared/services/const.service';
import { catchError, map, Observable, throwError } from 'rxjs';
import { IUserData } from '../../shared/models/shared.models';

@Injectable()
export class UsersService {
  constructor(private _http: HttpClient, private _const: ConstService) {}

  getTableData(): Observable<IUserData[]> {
    const url = `${this._const.API_URL}auth/all`;
    return this._http.get<IUserData[]>(url).pipe(
      map((data) => data),
      catchError((e) => throwError(() => e))
    );
  }
}
