import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../../store/app.state';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-counter-label',
    templateUrl: './counter-label.component.html',
    styleUrl: './counter-label.component.css',
    standalone: false
})
export class CounterLabelComponent implements OnInit {
  counter$?: Observable<number>;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.counter$ = this.store.select((a) => a.counter.counter);
  }
}
