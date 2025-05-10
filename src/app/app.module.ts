import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { CounterAdvancedControlComponent } from './counter/counter-advanced-control/counter-advanced-control.component';
import { CounterLabelComponent } from './counter/counter-label/counter-label.component';
import { CounterControlsComponent } from './counter/counter-controls/counter-controls.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./counter/counter.module').then((e) => e.Counter),
  },
  {
    path: 'post',
    loadChildren: () =>
      import('./posts/posts.module').then((e) => e.PostsModule),
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    NavbarComponent,
    BrowserModule,

    StoreModule.forRoot({ counter: counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
      logOnly: false,
    }),
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
