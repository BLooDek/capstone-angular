import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './auth/components/user-info/user-info.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: UserInfoComponent,
  },
  {
    path: 'notes',
    loadChildren: () =>
      import('./notebook/notebook.module').then((m) => m.NotebookModule),
    canActivate: [AuthGuard],
  },
  { path: 'users', redirectTo: 'users/1', pathMatch: 'full' },
  {
    path: 'users/:id',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
