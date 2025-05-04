import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../../store/app.state';
import { decrement, increment, reset } from '../../store/counter.action';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrl: './counter-controls.component.css',
})
export class CounterControlsComponent {
  constructor(private store: Store<{ counter: CounterState }>) {}

  onReset() {
    this.store.dispatch(reset());
  }
  onDecrement() {
    this.store.dispatch(decrement());
  }
  onIncrement() {
    this.store.dispatch(increment());
  }
}
