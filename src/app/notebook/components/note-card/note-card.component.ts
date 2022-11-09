import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { INote } from '../../models/notebook.interface';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteCardComponent implements OnInit {
  @Input() item: INote;
  constructor() {}

  ngOnInit(): void {}
}
