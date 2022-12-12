import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ConstService } from '../../shared/services/const.service';
import { catchError, map, Observable, throwError } from 'rxjs';
import { INote } from '../models/notebook.interface';
import { environment } from '../../../environments/environment';

@Injectable()
export class NotebookService {
  constructor(private _http: HttpClient) {}

  getNotes(): Observable<INote[]> {
    const url = `${environment.API_URL}notes/`;
    return this._http.get<INote[]>(url).pipe(
      map((data) => data),
      catchError((e) => throwError(() => e))
    );
  }

  addNote(payload): Observable<INote> {
    const url = `${environment.API_URL}notes/`;
    return this._http.post<INote>(url, payload).pipe(
      map((data) => data),
      catchError((e) => throwError(() => e))
    );
  }
}
