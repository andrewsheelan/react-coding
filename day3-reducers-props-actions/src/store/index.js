import { createStore } from "redux";
import reducers from "../reducers";
import { persistStore } from 'redux-pouchdb';

const store = createStore(
  reducers /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
persistStore(store)
store.subscribe(()=> console.log('Changed'))

export default store;
