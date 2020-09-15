import reduxSagaFirebase from "../../config/reduxSagaFirebase";
import { takeLatest, put, call } from "redux-saga/effects";
import types from '.'
import actions from './actions'
function* authSagaWorker({ email, password }) {
  try {
    const data = yield call(
      reduxSagaFirebase.auth.signInWithEmailAndPassword,
      email,
      password
    );
    yield put(actions.loginSuccess(data));
  } catch (error) {
    yield put(actions.loginFailure(error));
  }
}

export default function* authSaga() {
  yield takeLatest( types.LOGIN_STARTED, authSagaWorker);
}
