import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
//  TODO: add nice styling :)
const routes: Routes = [
  // TODO: add pages
  { path: 'home', component: NavigationComponent },
  { path: 'notes', component: NavigationComponent },
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
