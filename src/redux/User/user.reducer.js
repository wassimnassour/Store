import { UserActionTypes } from "./user.types";
const INTAIL_DATA = {
  currentUser: null,
  error: null,
  loading: false,
};

export const userReducer = (state = INTAIL_DATA, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_WITH_EMAIL_START:
    case UserActionTypes.SIGN_WITH_GOOGLE_START:
      return {
        ...state,
        loading: true,
      };
    case UserActionTypes.SIGN_IN_SUCCES:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        error: null,
      };

    case UserActionTypes.SIGN_IN_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        currentUser: null,
      };
    default:
      return {
        ...state,
      };
  }
};
