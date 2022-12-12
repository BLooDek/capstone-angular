import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerService } from './services/spinner.service';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { BoolToWordPipe } from './pipes/bool-to-word.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarService } from './services/snack.service';
import { MyLetDirective } from './directives/my-let.directive';

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatDialogModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  TextFieldModule,
  MatSnackBarModule,
];

@NgModule({
  declarations: [
    NavigationComponent,
    SpinnerComponent,
    BoolToWordPipe,
    MyLetDirective,
  ],
  imports: [
    CommonModule,
    ...materialModules,
    RouterModule,
    ReactiveFormsModule,
    OverlayModule,
  ],
  exports: [
    NavigationComponent,
    ...materialModules,
    ReactiveFormsModule,
    OverlayModule,
    BoolToWordPipe,
    MyLetDirective,
  ],
  providers: [SpinnerService, SnackBarService],
})
export class SharedModule {}
