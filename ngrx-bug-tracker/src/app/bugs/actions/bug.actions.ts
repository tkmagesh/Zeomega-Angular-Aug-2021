import { Action, props, createAction } from '@ngrx/store'

import { Bug } from '../models/bug.model'

export enum BugActionTypes {
    ADD_BUG = '[BUGS] ADD_BUG',
    REMOVE_BUG = '[BUGS] REMOVE_BUG',
    LOAD_BUG = '[BUGS] LOAD_BUG'
}

export const addBugAction = createAction(BugActionTypes.ADD_BUG, bug => ({bug}))
export const removeBugAction = createAction(BugActionTypes.REMOVE_BUG, bug => ({bug}))
export const loadBugAction = createAction(BugActionTypes.LOAD_BUG, bugs => ({bugs}))
/* export class AddBugAction implements Action {
  readonly type = BugActionTypes.ADD_BUG

  constructor(public payload: Bug) {

  }
}

export class RemoveBugAction implements Action {
  readonly type = BugActionTypes.REMOVE_BUG

  constructor(public payload: Bug) {

  }
} */

/* export class LoadBugAction implements Action {
  readonly type = BugActionTypes.LOAD_BUG

  constructor(public payload: Bug) {

  }
} */

//export type BugAction = AddBugAction | RemoveBugAction ;