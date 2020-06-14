import { put, call, takeLatest, all } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";
import {
  SignInWithEMailStart,
  SignInWithGoogleSucces,
  SignInWithEMailSucces,
} from "./user.action";

function* SignInWithEmail() {
  put(SignInWithEMailSucces);
}
function* SignInWithGoogle() {}
function* StartSignInWithEmail() {
  yield takeLatest(UserActionTypes.SIGN_WITH_EMAIL_START, SignInWithGoogle);
}

function* StartSignInWithGoogle() {
  yield takeLatest(UserActionTypes.SIGN_WITH_EMAIL_START, SignInWithEmail);
}

export function* userSaga() {
  yield all([call(StartSignInWithEmail), call(StartSignInWithGoogle)]);
}
