import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { UserInfoComponent } from './auth/components/user-info/user-info.component';
import { AuthGuard } from './auth/guards/auth.guard';
//  TODO: add nice styling :)
const routes: Routes = [
  {
    path: 'home',
    component: UserInfoComponent,
  },
  {
    path: 'notes',
    loadChildren: () =>
      import('./notebook/notebook.module').then((m) => m.NotebookModule),
    // canActivate: [AuthGuard],
  },
  { path: 'calendar', component: NavigationComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirect to
  // { path: '**', component: PageNotFoundComponent }, TODO: add 404 page
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
