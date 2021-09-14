import { createReducer, on } from '@ngrx/store';
/* import { TypedAction } from '@ngrx/store/src/models'; */
import { increment, decrement, reset } from './spinner.actions';

const _spinnerReducer = createReducer(
    0,
    /* on(increment, (state, action) => state + action.delta),
    on(decrement, (state, action) => state - action.delta), */
    on(increment, (state, {delta}) => state + delta),
    on(decrement, (state, {delta}) => state - delta),
    on(reset, state => 0)
);

export function spinnerReducer(state : any , action : any) : number{
    return _spinnerReducer(state, action);
}