import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { IModuleState } from '../../state/module.state';
import { IUserData } from '../../../shared/models/shared.models';
import { Store } from '@ngrx/store';
import { GetUsersDataAction } from '../../actions/users.actions';
import {
  selectLoading,
  selectTableData,
} from '../../selectors/users.selectors';
import { map, Observable, tap } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { USER_TABLE_COLUMNS } from '../../constants/users.const';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource$: Observable<MatTableDataSource<IUserData>>;
  loading$: Observable<boolean>;
  displayedColumns: (keyof IUserData)[] = USER_TABLE_COLUMNS;

  constructor(private _store: Store<IModuleState>) {
    this._store.select(selectLoading);
    this._store.dispatch(GetUsersDataAction());
    this.dataSource$ = this._store.select(selectTableData).pipe(
      map((data) => new MatTableDataSource<IUserData>(data)),
      tap((data) => {
        data.paginator = this.paginator;
      })
    );
  }
}
