import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
const { createStore, compose, applyMiddleware } = require("redux");
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers /* preloadedState, */,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
sagaMiddleware.run(rootSaga)

export default store;
