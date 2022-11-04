import {Injectable} from "@angular/core";
import {catchError, map, Observable, of, switchMap} from "rxjs";
import {Action, Store} from "@ngrx/store";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {IModuleState} from "../state/module.state";
import * as AuthActions from '../actions/auth.action'
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthEffects {
  constructor(private _actions$: Actions, private _store: Store<IModuleState>, private _authService: AuthService) {
  }

  registerUser$: Observable<Action> = createEffect(() => this._actions$.pipe(
    ofType(AuthActions.RegisterUserAction),
    switchMap(({payload}) => this._authService.registerUser(payload).pipe(
      map(data => AuthActions.RegisterUserActionSuccess({token: data})),
      catchError(error => of(AuthActions.RegisterUserActionError(error)))
    ))))


}