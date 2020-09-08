import { take, put, takeLatest, call, delay } from "redux-saga/effects";
import actions from "./actions";
import types from "."
const {
  default: reduxSagaFirebase,
} = require("../../config/reduxSagaFirebase");

export function* fetchNotesSaga() {
  const channel = reduxSagaFirebase.firestore.channel("notes");

  while (true) {
    try {
      const snapshot = yield take(channel);
      yield put(actions.notesFetch());
      let notes = [];
      snapshot.forEach((noteData) => {
        notes = [...notes, { id: noteData.id, ...noteData.data() }];
      });
      yield put(actions.notesFetched(notes));
    } catch (e) {
      yield put(actions.notesError(String(e)));
    }
  }
}

function* addNoteWorker({ payload: { title, content, author, created } }) {
  try {
    yield call(reduxSagaFirebase.firestore.addDocument, "notes", {
      title,
      content,
      author,
      created,
    });
    yield put(actions.noteCreated());
    yield delay(500)
    yield put(actions.noteCreationReset());
  } catch (e) {
    yield put(actions.notesError());
  }
}

export function* addNote() {
  yield takeLatest(types.NOTE_CREATE, addNoteWorker);
}
