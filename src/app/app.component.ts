import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { IModuleState } from './auth/state/module.state';
import { Store } from '@ngrx/store';
import { GetTokenAction } from './auth/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'capstone-angular';

  constructor(private _store: Store<IModuleState>) {
    this._store.dispatch(GetTokenAction());
  }
}
