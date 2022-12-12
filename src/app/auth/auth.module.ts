import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { AUTH_STORE_KEY, featureReducers } from './reducers/module.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';
import { AuthService } from './services/auth.service';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { ConfirmLogoutComponent } from './components/confirm-logout/confirm-logout.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { AuthGuard } from './guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LocalTokenService } from './services/local-token.service';

@NgModule({
  declarations: [
    RegisterDialogComponent,
    LoginDialogComponent,
    ConfirmLogoutComponent,
    UserInfoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(AUTH_STORE_KEY, featureReducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
  exports: [RegisterDialogComponent],
  providers: [
    AuthService,
    LocalTokenService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class AuthModule {}
