import {Injectable} from "@angular/core";
import {Observable, of, switchMap} from "rxjs";
import {Action, Store} from "@ngrx/store";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {IModuleState} from "../state/module.state";
import * as AuthActions from '../actions/auth.action'

@Injectable()
export class AuthEffects {
  registerUser$: Observable<Action> = createEffect(() => this._actions$.pipe(
    ofType(AuthActions.RegisterUserAction),
    switchMap(({payload}) => {
      console.log(payload)
      return of(AuthActions.RegisterUserActionError({error: ''}))
    })
  ))

  constructor(private _actions$: Actions, private _store: Store<IModuleState>) {
  }
}
