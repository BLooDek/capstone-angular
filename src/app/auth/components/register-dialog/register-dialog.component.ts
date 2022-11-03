import { Component, OnInit } from '@angular/core';
import {EmailValidator, FormBuilder, FormGroup, MinValidator, RequiredValidator, Validators} from '@angular/forms';
import {IModuleState} from "../../state/module.state";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {selectLoading} from "../../selectors/auth.selectors";
import * as AuthActions from '../../actions/auth.action'

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss'],
})
export class RegisterDialogComponent implements OnInit {
  loading$: Observable<boolean>;
  formGroup: FormGroup;

  constructor(
    private _store: Store<IModuleState>,
    private _fb: FormBuilder
  ) {
    this.loading$ = this._store.select(selectLoading);
    this.formGroup = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password1: ['', [Validators.required, Validators.minLength(10)]],
      password2: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
//TODO add password match validator

  ngOnInit(): void {

  }



  onSubmit() {
    this._store.dispatch(AuthActions.RegisterUserAction({payload: ''}))
  }
}
