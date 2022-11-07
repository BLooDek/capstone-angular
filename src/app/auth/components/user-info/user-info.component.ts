import { Component, OnInit } from '@angular/core';
import { IModuleState } from '../../state/module.state';
import { Store } from '@ngrx/store';
import { Observable, shareReplay } from 'rxjs';
import { selectUserData } from '../../selectors/auth.selectors';
import { IUserData } from '../../../shared/models/shared.models';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  userInfo$: Observable<IUserData>;

  constructor(private _store: Store<IModuleState>) {
    this.userInfo$ = _store.select(selectUserData).pipe(shareReplay(1));
  }

  ngOnInit(): void {}
}
