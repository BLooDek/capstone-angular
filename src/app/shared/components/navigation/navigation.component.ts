import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterDialogComponent } from '../../../auth/components/register-dialog/register-dialog.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectLoading,
  selectUserData,
} from '../../../auth/selectors/auth.selectors';
import { LoginDialogComponent } from 'src/app/auth/components/login-dialog/login-dialog.component';
import { AuthState } from '../../../auth/state/auth.state';
import { ConfirmLogoutComponent } from '../../../auth/components/confirm-logout/confirm-logout.component';
import { IUserData } from '../../models/shared.models';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent implements OnInit {
  loading$: Observable<boolean>;
  userData$: Observable<IUserData>;

  constructor(public dialog: MatDialog, private _store: Store<AuthState>) {
    this.loading$ = this._store.select(selectLoading);
    this.userData$ = this._store.select(selectUserData);
  }

  openRegisterDialog() {
    this.dialog.open(RegisterDialogComponent);
  }
  openLoginDialog() {
    this.dialog.open(LoginDialogComponent);
  }

  ngOnInit(): void {}

  openLogoutDialog() {
    this.dialog.open(ConfirmLogoutComponent);
  }
}
