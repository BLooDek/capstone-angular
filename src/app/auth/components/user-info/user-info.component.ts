import { Component, OnInit } from '@angular/core';
import { IModuleState } from '../../state/module.state';
import { Store } from '@ngrx/store';
import { IUserData } from '../../models/auth.models';
import { Observable, shareReplay } from 'rxjs';
import { selectUserData } from '../../selectors/auth.selectors';

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
  //Add pipe for boolens to make them YES/NO

  ngOnInit(): void {}
}
