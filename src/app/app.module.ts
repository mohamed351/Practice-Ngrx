import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { CounterAdvancedControlComponent } from './counter/counter-advanced-control/counter-advanced-control.component';
import { CounterLabelComponent } from './counter/counter-label/counter-label.component';
import { CounterControlsComponent } from './counter/counter-controls/counter-controls.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const routes: Routes = [];
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterAdvancedControlComponent,
    CounterLabelComponent,
    CounterControlsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
      logOnly: false,
    }),
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
