import { put, call, takeLatest, all } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";
import {
  auth,
  GoogleProvider,
  createUserProfileDocument,
} from "../../Firebase/firebase";
import { SignInFail, SignInSucces } from "./user.action";

function* getSnapshotFromUserAuth(userAuth, additionalData) {
  console.log(additionalData, "adddit");
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData,
    );
    console.log(userRef, "userRef");

    const userSnapshot = yield userRef.get();
    console.log(userSnapshot, "userSnapshot");
    yield put(SignInSucces({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    console.log(error);
    yield put(SignInFail(error));
  }
}
function* SignInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(GoogleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(SignInFail(error));
  }
}

function* SignInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    console.log(error);
    yield put(SignInFail(error));
  }
}

function* signUpUser({ payload: { email, password, ...adtionalData } }) {
  console.log(adtionalData, "additionalData");
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user, adtionalData);
  } catch (error) {
    console.log(error, "signUp");
    yield put(SignInFail(error));
  }
}

function* StartSignInWithEmail() {
  yield takeLatest(UserActionTypes.SIGN_WITH_EMAIL_START, SignInWithEmail);
}

function* StartSignInWithGoogle() {
  yield takeLatest(UserActionTypes.SIGN_WITH_GOOGLE_START, SignInWithGoogle);
}
function* CreateProfileDocuments() {
  yield takeLatest(UserActionTypes.CREATE_PROFILE_ACCOUNT, signUpUser);
}

export function* userSaga() {
  yield all([
    call(StartSignInWithEmail),
    call(StartSignInWithGoogle),
    call(CreateProfileDocuments),
  ]);
}
