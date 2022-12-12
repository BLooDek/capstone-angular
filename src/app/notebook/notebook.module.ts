import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotebookComponent } from './components/notebook/notebook.component';
import { SharedModule } from '../shared/shared.module';
import { NotebookRoutingModule } from './notebook-routing.module';
import { StoreModule } from '@ngrx/store';
import {
  featureReducers,
  NOTEBOOK_STORE_KEY,
} from './reducers/module.reducers';
import { EffectsModule } from '@ngrx/effects';
import { NotebookEffects } from './effects/notebook.effect';
import { NotebookService } from './services/notebook.service';
import { AddNoteDialogComponent } from './components/add-note-dialog/add-note-dialog.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { EditNoteDialogComponent } from './components/edit-note-dialog/edit-note-dialog.component';
import { ConfirmDeleteNoteComponent } from './components/confirm-delete-note/confirm-delete-note.component';

@NgModule({
  declarations: [
    NotebookComponent,
    AddNoteDialogComponent,
    NoteCardComponent,
    EditNoteDialogComponent,
    ConfirmDeleteNoteComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NotebookRoutingModule,
    StoreModule.forFeature(NOTEBOOK_STORE_KEY, featureReducers),
    EffectsModule.forFeature([NotebookEffects]),
  ],
  providers: [NotebookService],
})
export class NotebookModule {}
