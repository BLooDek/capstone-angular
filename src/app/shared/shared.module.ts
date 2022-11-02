import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

const materialModules = [MatSliderModule, MatToolbarModule, MatIconModule];

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, ...materialModules, RouterModule],
  exports: [NavigationComponent, ...materialModules],
})
export class SharedModule {}
