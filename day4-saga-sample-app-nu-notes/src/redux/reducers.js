import { combineReducers } from "redux";
import auth from "../modules/auth/reducer";
import notes from "../modules/notes/reducer";
export default combineReducers({ auth, notes });
