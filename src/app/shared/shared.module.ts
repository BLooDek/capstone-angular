import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import {MatFormFieldModule} from "@angular/material/form-field";
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from "@angular/material/input";
import {StoreModule} from "@ngrx/store";

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatDialogModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, ...materialModules, RouterModule, ReactiveFormsModule],
  exports: [NavigationComponent, ...materialModules, ReactiveFormsModule],
})
export class SharedModule {}
