import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterDialogComponent } from '../../../auth/components/register-dialog/register-dialog.component';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(RegisterDialogComponent, {
      data: {
        animal: 'panda',
      },
    });
    dialogRef.afterClosed().subscribe((e) => console.log(e));
  }

  ngOnInit(): void {}
}
