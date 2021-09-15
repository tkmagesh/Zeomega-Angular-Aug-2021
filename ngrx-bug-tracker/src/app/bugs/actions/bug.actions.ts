import { Action, props, createAction } from '@ngrx/store'

import { Bug } from '../models/bug.model'

export enum BugActionTypes {
    ADD_BUG = '[BUGS] ADD_BUG',
    REMOVE_BUG = '[BUGS] REMOVE_BUG',
    LOAD_BUG = '[BUGS] LOAD_BUG',
    REPLACE_BUG = '[BUGS] REPLACE_BUG'
}

export const addBugAction = createAction(BugActionTypes.ADD_BUG, bug => ({bug}))
export const removeBugAction = createAction(BugActionTypes.REMOVE_BUG, bug => ({bug}))
export const loadBugAction = createAction(BugActionTypes.LOAD_BUG, bugs => ({bugs}))
export const replaceBugAction = createAction(BugActionTypes.REPLACE_BUG, bug => ({bug}))
