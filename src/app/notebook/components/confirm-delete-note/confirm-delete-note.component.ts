import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete-note',
  templateUrl: './confirm-delete-note.component.html',
  styleUrls: ['./confirm-delete-note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDeleteNoteComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public title: string) {}

  ngOnInit(): void {}
}
