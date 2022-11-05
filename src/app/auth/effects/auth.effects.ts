import {Injectable} from "@angular/core";
import {catchError, map, Observable, of, switchMap, withLatestFrom} from "rxjs";
import {Action, Store} from "@ngrx/store";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {IModuleState} from "../state/module.state";
import * as AuthActions from '../actions/auth.actions'
import {AuthService} from "../services/auth.service";
import {selectToken} from "../selectors/auth.selectors";

@Injectable()
export class AuthEffects {
  constructor(private _actions$: Actions, private _store: Store<IModuleState>, private _authService: AuthService) {
  }

  registerUser$: Observable<Action> = createEffect(() => this._actions$.pipe(
    ofType(AuthActions.RegisterUserAction),
    switchMap((payload) => this._authService.registerUser(payload).pipe(
      map(data => AuthActions.RegisterUserActionSuccess(data)),
      catchError(error => of(AuthActions.RegisterUserActionError(error)))
    ))
  ))

  loginUser$: Observable<Action> = createEffect(() => this._actions$.pipe(
    ofType(AuthActions.LoginUserAction),
    switchMap((payload) => this._authService.loginUser(payload).pipe(
      map(data => AuthActions.LoginUserActionSuccess(data)),
      catchError(error => of(AuthActions.LoginUserActionError(error)))
    ))
  ))

  getUserData$: Observable<Action> = createEffect(() => this._actions$.pipe(
      ofType(AuthActions.GetUserDataAction, AuthActions.LoginUserActionSuccess, AuthActions.RegisterUserActionSuccess),
      switchMap(action => of(action).pipe(
        withLatestFrom(this._store.select(selectToken)),
        switchMap(([_, token]) => this._authService.getUserData(token).pipe(
          map(data => {
            console.log(data);
            return AuthActions.GetUserDataActionSuccess(data)
          }),
          catchError(error => of(AuthActions.GetUserDataActionError(error)))
        ))
      ))

    )
  )

}
