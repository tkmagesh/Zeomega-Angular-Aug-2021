import { createAction } from "@ngrx/store";

/* createAction = utility function to create the "action creator" */
export const increment = createAction("[Spinner] Increment");
export const decrement = createAction("[Spinner] Decrement");