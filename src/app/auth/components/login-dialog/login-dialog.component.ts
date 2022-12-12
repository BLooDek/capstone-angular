import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { IModuleState } from '../../state/module.state';
import * as AuthActions from '../../actions/auth.actions';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginDialogComponent {
  formGroup: FormGroup;
  constructor(
    private _store: Store<IModuleState>,
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<LoginDialogComponent>
  ) {
    this.formGroup = _fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  get email() {
    return this.formGroup.get('email');
  }
  get password() {
    return this.formGroup.get('password');
  }

  onSubmit() {
    this._store.dispatch(
      AuthActions.LoginUserAction(this.formGroup.getRawValue())
    );
    this._dialogRef.close();
  }
}
