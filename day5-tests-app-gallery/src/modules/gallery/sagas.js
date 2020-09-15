import Axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import types from ".";
import { setGalleryData, showError } from "./actions";
import { ENDPOINT } from "./constants";

const fetchAPI = () => Axios.get(ENDPOINT);
function* loadGalleryDataWorker() {
  try {
    const response = yield call(fetchAPI);
    if (response.status < 300) {
      yield put(setGalleryData(response.data));
    } else {
      yield put(showError(response.data));
    }
  } catch (e) {
    yield put(showError(String(e)));
  }
}

export const workers = {
  loadGalleryDataWorker,
};

export default function* sagas() {
  yield all([
    takeLatest(types.GALLERY_DATA_LOAD, workers.loadGalleryDataWorker),
  ]);
}
