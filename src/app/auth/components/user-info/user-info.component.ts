import { Component, OnInit } from '@angular/core';
import { IModuleState } from '../../state/module.state';
import { Store } from '@ngrx/store';
import { Observable, shareReplay } from 'rxjs';
import { selectUserData } from '../../selectors/auth.selectors';
import { IUserData } from '../../../shared/models/shared.models';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  userInfo$: Observable<IUserData>;

  constructor(private _store: Store<IModuleState>, public dialog: MatDialog) {
    this.userInfo$ = _store.select(selectUserData).pipe(shareReplay(1));
  }

  ngOnInit(): void {}

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent);
  }

  openRegisterDialog() {
    this.dialog.open(RegisterDialogComponent);
  }
}
