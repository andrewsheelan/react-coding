import application from "./application";
import login from "./login";
import todos from "./todos";
import tweets from "./tweets";
import { combineReducers } from "redux";
import { persistentReducer } from "redux-pouchdb";
import PouchDB from "pouchdb";
const db = new PouchDB('NuAppReducer');

const reducers = combineReducers({
  application,
  login,
  todos,
  tweets,
});

const reducerName = "NuAppReducer";
export default persistentReducer(db, reducerName)(reducers);

// {
//     application: {loggedIn},
//     login: {
//         email, password
//     },
//     todos: {todoList},
//     tweets: {tweets}
// }
