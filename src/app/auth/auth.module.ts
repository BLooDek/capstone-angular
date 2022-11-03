import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component';
import { SharedModule } from '../shared/shared.module';
import {StoreModule} from "@ngrx/store";
import {AUTH_STORE_KEY, featureReducers} from "./reducers/module.reducers";


@NgModule({
  declarations: [RegisterDialogComponent],
  imports: [CommonModule, SharedModule, StoreModule.forFeature(AUTH_STORE_KEY, featureReducers)],
  exports: [RegisterDialogComponent],
})
export class AuthModule {}
