import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IModuleState} from "../../state/module.state";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {selectLoading} from "../../selectors/auth.selectors";
import * as AuthActions from '../../actions/auth.action'
import {MatDialogRef} from "@angular/material/dialog";

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
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<RegisterDialogComponent>
  ) {
    this.loading$ = this._store.select(selectLoading);
    this.formGroup = this._fb.group({
      email: ['', [Validators.required, Validators.pattern(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)]],
      password1: ['', [Validators.required, Validators.minLength(10)]],
      password2: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

//TODO: add password match validator

  ngOnInit(): void {

  }


  onSubmit() {
    this._store.dispatch(AuthActions.RegisterUserAction({payload: this.formGroup.getRawValue()}))
    this._dialogRef.close();

  }
}
