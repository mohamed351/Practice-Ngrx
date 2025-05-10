import { Component } from '@angular/core';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { incrementByValue } from '../../store/counter.action';

@Component({
  selector: 'app-counter-advanced-control',
  templateUrl: './counter-advanced-control.component.html',
  styleUrl: './counter-advanced-control.component.css',
  standalone: false,
})
export class CounterAdvancedControlComponent {
  counter?: number;
  constructor(private store: Store<AppState>) {}

  adding() {
    if (this.counter)
      this.store.dispatch(incrementByValue({ data: +this.counter }));
  }
}
