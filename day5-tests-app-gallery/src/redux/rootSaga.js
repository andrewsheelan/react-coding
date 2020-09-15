import { all, fork } from "redux-saga/effects";
import gallerySagas from "../modules/gallery/sagas";

export default function* rootSaga() {
  yield all([gallerySagas].map(fork));
}
