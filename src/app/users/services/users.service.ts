import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { IUserData } from '../../shared/models/shared.models';
import { environment } from '../../../environments/environment';

@Injectable()
export class UsersService {
  constructor(private _http: HttpClient) {}

  getTableData(): Observable<IUserData[]> {
    const url = `${environment.API_URL}auth/all`;
    return this._http.get<IUserData[]>(url).pipe(
      map((data) => data),
      catchError((e) => throwError(() => e))
    );
  }
}
