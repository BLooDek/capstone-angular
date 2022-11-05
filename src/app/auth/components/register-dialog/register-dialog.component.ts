import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IModuleState} from "../../state/module.state";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {selectLoading} from "../../selectors/auth.selectors";
import * as AuthActions from '../../actions/auth.actions'
import {MatDialogRef} from "@angular/material/dialog";
import {EMAIL_VALIDATION_PATTERN} from "../../contants/auth.const";

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
      email: ['', [Validators.required, Validators.pattern(EMAIL_VALIDATION_PATTERN)]],
      password1: ['', [Validators.required, Validators.minLength(10)]],
      password2: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

//TODO: add password match validator

  ngOnInit(): void {

  }


  onSubmit() {
    this._store.dispatch(AuthActions.RegisterUserAction(this.formGroup.getRawValue()))
    this._dialogRef.close();
  }
}
