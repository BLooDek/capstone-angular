import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IModuleState } from '../../state/module.state';
import { Store } from '@ngrx/store';
import { LogoutUserAction } from '../../actions/auth.actions';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-logout',
  templateUrl: './confirm-logout.component.html',
  styleUrls: ['./confirm-logout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmLogoutComponent implements OnInit {
  constructor(
    private _store: Store<IModuleState>,
    private _dialogRef: MatDialogRef<ConfirmLogoutComponent>
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this._store.dispatch(LogoutUserAction());
    this._dialogRef.close();
  }
}
