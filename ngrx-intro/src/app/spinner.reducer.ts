import { createReducer, on } from '@ngrx/store';
/* import { TypedAction } from '@ngrx/store/src/models'; */
import { increment, decrement } from './spinner.actions';

const _spinnerReducer = createReducer(
    0,
    on(increment, state => state + 1),
    on(decrement, state => state - 1)
);

export function spinnerReducer(state : any , action : any) : number{
    return _spinnerReducer(state, action);
}