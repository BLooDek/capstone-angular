import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { first, map, Observable } from 'rxjs';
import { IModuleState } from '../state/module.state';
import { Store } from '@ngrx/store';
import { selectUserData } from '../selectors/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _store: Store<IModuleState>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this._store.select(selectUserData).pipe(
      first(),
      map((userData) => !!userData)
    );
  }
}
