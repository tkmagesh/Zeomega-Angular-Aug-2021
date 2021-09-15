import { state } from '@angular/animations';
import { createReducer, on, Action } from '@ngrx/store';
import { addBugAction, loadBugAction, removeBugAction } from '../actions/bug.actions'
import { Bug } from '../models/bug.model'

const initialState : Array<Bug> = [{
    id: 1,
    name: 'Bug 1',
    isClosed: false,
    createdAt: new Date('01/01/2019'),
}]
const _bugsReducer = createReducer(
    initialState,
    on(addBugAction, (state, {bug}) => [...state, bug]),
    on(removeBugAction, (state, {bug}) => state.filter(b => b.id !== bug.id)),
    on(loadBugAction, (state  , {bugs}) => bugs)
);

export function BugsReducer(state : Array<Bug> = initialState, action : Action) : Array<Bug> {
  return _bugsReducer(state, action);
}

