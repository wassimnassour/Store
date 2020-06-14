import { UserActionTypes } from "./user.types";
const INTAIL_DATA = {
  currentUser: null,
  loading: false,
};

export const userReducer = (state = INTAIL_DATA, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_WITH_EMAIL_START:
      return {
        ...state,
        loading: true,
      };
    case UserActionTypes.SIGN_WITH_GOOGLE_SUCCES:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };

    default:
      return {
        ...state,
      };
  }
};
