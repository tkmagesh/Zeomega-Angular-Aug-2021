import { createAction } from "@ngrx/store";

/* createAction = utility function to create the "action creator" */
export const increment = createAction("[Spinner] Increment", delta => ({ delta }));
export const decrement = createAction("[Spinner] Decrement", delta => ({ delta}));
export const reset = createAction("[Spinner] Reset");