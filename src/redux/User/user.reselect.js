import { createSelector } from "reselect";

const selectUser = (state) => state.User;
export const selectCurrentUser = createSelector(
  selectUser,
  (User) => User.currentUser,
);
