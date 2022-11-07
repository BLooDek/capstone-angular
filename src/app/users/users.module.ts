import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { StoreModule } from '@ngrx/store';
import { featureReducers, USERS_STORE_KEY } from './reducers/module.reducers';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './effects/users.effects';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    StoreModule.forFeature(USERS_STORE_KEY, featureReducers),
    EffectsModule.forFeature([UsersEffects]),
  ],
  providers: [UsersService],
})
export class UsersModule {}
