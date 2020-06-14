import { all, call } from "redux-saga/effects";
import { userSaga } from "./User/user.saga";
export function* rootSaga() {
  yield all([call(userSaga)]);
}
