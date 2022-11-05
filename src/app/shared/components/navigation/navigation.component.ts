import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterDialogComponent } from '../../../auth/components/register-dialog/register-dialog.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IModuleState } from '../../../auth/state/module.state';
import { selectLoading } from '../../../auth/selectors/auth.selectors';
import { LoginDialogComponent } from 'src/app/auth/components/login-dialog/login-dialog.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  loading$: Observable<boolean>;

  constructor(public dialog: MatDialog, private _store: Store<IModuleState>) {
    this.loading$ = this._store.select(selectLoading);
  }

  openRegisterDialog() {
    const dialogRef = this.dialog.open(RegisterDialogComponent);
    // dialogRef.afterClosed().subscribe((e) => console.log(e));
  }
  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent);
  }

  ngOnInit(): void {}
}
