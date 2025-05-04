import { createReducer, on } from '@ngrx/store';
import {
  decrement,
  increment,
  incrementByValue,
  reset,
} from './counter.action';
export interface CounterState {
  counter: number;
}
const intitialState: CounterState = {
  counter: 0,
};

export const counterReducer = createReducer(
  intitialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(incrementByValue, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.data,
    };
  })
);
