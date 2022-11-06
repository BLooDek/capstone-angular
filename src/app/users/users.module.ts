import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [CommonModule, SharedModule, UsersRoutingModule],
})
export class UsersModule {}
