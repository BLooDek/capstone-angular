import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotebookComponent } from './components/notebook/notebook.component';
import { SharedModule } from '../shared/shared.module';
import { NotebookRoutingModule } from './notebook-routing.module';

@NgModule({
  declarations: [NotebookComponent],
  imports: [CommonModule, SharedModule, NotebookRoutingModule],
})
export class NotebookModule {}
