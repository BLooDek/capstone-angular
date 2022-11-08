import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IModuleState } from '../../state/module.state';
import { Store } from '@ngrx/store';
import { LogoutUserAction } from '../../actions/auth.actions';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-logout',
  templateUrl: './confirm-logout.component.html',
  styleUrls: ['./confirm-logout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmLogoutComponent {
  constructor(
    private _store: Store<IModuleState>,
    private _dialogRef: MatDialogRef<ConfirmLogoutComponent>,
    private _router: Router
  ) {}

  onSubmit() {
    this._store.dispatch(LogoutUserAction());
    this._router.navigate(['/']);
    this._dialogRef.close();
  }
}
