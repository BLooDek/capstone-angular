import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { first, map, Observable, tap } from 'rxjs';
import { IModuleState } from '../state/module.state';
import { Store } from '@ngrx/store';
import { selectUserData } from '../selectors/auth.selectors';
import { SnackBarService } from '../../shared/services/snack.service';

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(
    private _store: Store<IModuleState>,
    private _snackService: SnackBarService
  ) {}

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return this._store.select(selectUserData).pipe(
      first(),
      tap((userData) => {
        if (!userData) {
          this._snackService.openSnackBar(
            "Can't activate this page, please login",
            'Ok'
          );
        }
      }),
      map((userData) => !!userData)
    );
  }
}
