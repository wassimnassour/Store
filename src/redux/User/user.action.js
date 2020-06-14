import { UserActionTypes } from "./user.types";
export const SignInWithEMailStart = () => ({
  type: UserActionTypes.SIGN_WITH_EMAIL_START,
});
export const SignInWithEMailSucces = (emailAndUser) => ({
  type: UserActionTypes.SIGN_WITH_EMAIL_SUCCES,
  payload: emailAndUser,
});
export const SignInWithEMailFail = (Error) => ({
  type: UserActionTypes.SIGN_WITH_EMAIL_FAIL,
  payload: Error,
});

export const SignInWithGoogleStart = (emailAndUser) => ({
  type: UserActionTypes.SIGN_WITH_GOOGLE_START,
  payload: emailAndUser,
});
export const SignInWithGoogleSucces = (emailAndUser) => ({
  type: UserActionTypes.SIGN_WITH_GOOGLE_SUCCES,
  payload: emailAndUser,
});
export const SignInWithGoogleFail = (error) => ({
  type: UserActionTypes.SIGN_WITH_GOOGLE_FAIL,
  payload: error,
});
