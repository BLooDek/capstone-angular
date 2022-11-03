import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {RegisterDialogComponent} from '../../../auth/components/register-dialog/register-dialog.component';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {IModuleState} from "../../../auth/state/module.state";
import {selectLoading} from "../../../auth/selectors/auth.selectors";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  loading$: Observable<boolean>;

  constructor(public dialog: MatDialog, private _store: Store<IModuleState>,) {
    this.loading$ = this._store.select(selectLoading);
  }

  openRegisterDialog() {
    const dialogRef = this.dialog.open(RegisterDialogComponent, {

      data: {
        animal: 'panda',
      },
    });
    dialogRef.afterClosed().subscribe((e) => console.log(e));
  }

  ngOnInit(): void {
  }
}
