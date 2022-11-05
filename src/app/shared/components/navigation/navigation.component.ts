import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterDialogComponent } from '../../../auth/components/register-dialog/register-dialog.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {selectLoading, selectUserData} from '../../../auth/selectors/auth.selectors';
import { LoginDialogComponent } from 'src/app/auth/components/login-dialog/login-dialog.component';
import {IUserData} from "../../../auth/models/auth.models";
import {AuthState} from "../../../auth/state/auth.state";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
  loading$: Observable<boolean>;
  userData$: Observable<IUserData>

  constructor(public dialog: MatDialog, private _store: Store<AuthState>) {
    this.loading$ = this._store.select(selectLoading);
    this.userData$ = this._store.select(selectUserData)
  }

  openRegisterDialog() {
    this.dialog.open(RegisterDialogComponent);
    // dialogRef.afterClosed().subscribe((e) => console.log(e));
  }
  openLoginDialog() {
    this.dialog.open(LoginDialogComponent);
  }

  ngOnInit(): void {}
}
