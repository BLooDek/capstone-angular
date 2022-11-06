import { RouterModule, Routes } from '@angular/router';
import { NotebookComponent } from './components/notebook/notebook.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: NotebookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotebookRoutingModule {}
