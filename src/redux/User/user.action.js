import { UserActionTypes } from "./user.types";
export const SignInWithEmailStart = (emailAndPassword) => ({
  type: UserActionTypes.SIGN_WITH_EMAIL_START,
  payload: emailAndPassword,
});
export const SignInWithGoogleStart = () => ({
  type: UserActionTypes.SIGN_WITH_GOOGLE_START,
});
export const SignInSucces = (emailAndUser) => ({
  type: UserActionTypes.SIGN_IN_SUCCES,
  payload: emailAndUser,
});
export const SignInFail = (error) => ({
  type: UserActionTypes.SIGN_IN_FAIL,
  payload: error,
});

export const createProfileAccount = (userData) => ({
  type: UserActionTypes.CREATE_PROFILE_ACCOUNT,
  payload: userData,
});
