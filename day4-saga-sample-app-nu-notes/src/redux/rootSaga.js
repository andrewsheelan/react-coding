import * as authSagas from '../modules/auth/sagas'
import * as notesSagas from '../modules/notes/sagas'
import { all, fork } from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([
        ...Object.values(authSagas),
        ...Object.values(notesSagas)
    ].map(fork))
}