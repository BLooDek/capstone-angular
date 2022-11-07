import { Component, OnInit } from '@angular/core';
import { IModuleState } from '../../state/module.state';
import { IUserData } from '../../../shared/models/shared.models';
import { Store } from '@ngrx/store';
import { GetUsersDataAction } from '../../actions/users.actions';
import { selectTableData } from '../../selectors/users.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  tableData$: Observable<IUserData[]>;
  constructor(private _store: Store<IModuleState>) {
    this._store.dispatch(GetUsersDataAction());
    this.tableData$ = this._store.select(selectTableData);
  }

  ngOnInit(): void {}
}
