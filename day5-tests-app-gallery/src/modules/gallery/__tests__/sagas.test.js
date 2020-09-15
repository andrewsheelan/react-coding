import { runSaga } from "redux-saga";
import sagas, { workers } from "../sagas";
import { fetchGalleryData, setGalleryData } from "../actions";
import types from "..";

global.recordSaga = async function (saga, state, sagaArguments) {
  const dispatched = [];

  const runSagaOptions = {
    getState: () => state,
    dispatch: (action) => dispatched.push(action),
  };

  await runSaga(runSagaOptions, saga, sagaArguments).toPromise();

  return dispatched;
};

const initialState = {
  gallery: {
    loading: false,
    error: {
      show: false,
      message: "",
    },
    data: {
      photos: [],
    },
  },
};

it("runs GALLERY_DATA_LOAD as the first yield", () => {
  const data = sagas();
  expect(data.next().value.payload[0].payload.args[0]).toBe(types.GALLERY_DATA_LOAD);
});

it("should have successfully called GALLERY_DATA_SET", async () => {
  const dispatches = await global.recordSaga(
    workers.loadGalleryDataWorker,
    initialState,
    {payload: fetchGalleryData}
  );
  expect(dispatches[0].type).toBe(types.GALLERY_DATA_SET)
});

