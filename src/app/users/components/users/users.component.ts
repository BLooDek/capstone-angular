import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IModuleState } from '../../state/module.state';
import { IUserData } from '../../../shared/models/shared.models';
import { Store } from '@ngrx/store';
import { GetUsersDataAction } from '../../actions/users.actions';
import {
  selectLoading,
  selectTableData,
} from '../../selectors/users.selectors';
import { first, map, Observable, shareReplay, tap } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { USER_TABLE_COLUMNS } from '../../constants/users.const';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private _store: Store<IModuleState>,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this._store.select(selectLoading);
    this._store.dispatch(GetUsersDataAction());
    this.dataSource$ = this._store.select(selectTableData).pipe(
      map((data) => new MatTableDataSource<IUserData>(data)),
      tap((data) => {
        data.paginator = this.paginator;
      })
    );
  }

  changePage(event?: PageEvent) {
    this._router.navigate(['/users', event.pageIndex + 1]);
    return event;
  }
}
