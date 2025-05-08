import { NgModule } from '@angular/core';
import { CounterComponent } from './counter.component';
import { CounterLabelComponent } from './counter-label/counter-label.component';
import { CounterAdvancedControlComponent } from './counter-advanced-control/counter-advanced-control.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const router: Routes = [{ path: '', component: CounterComponent }];

@NgModule({
  declarations: [
    CounterComponent,
    CounterLabelComponent,
    CounterAdvancedControlComponent,
    CounterControlsComponent,
  ],
  imports: [ CommonModule,RouterModule.forChild(router)],
})
export class Counter {}
