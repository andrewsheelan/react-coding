import { types } from "../actions";

const initState = {
  loggedIn: false,
  activeTab: "login",
};

export default (state = initState, action) => {
  switch (action.type) {
    case types.LOGIN_STARTED:
      return {
        loggedIn: true,
        activeTab: "todos",
      };
    case types.LOGOUT_STARTED:
      return {
        loggedIn: false,
        activeTab: "login",
      };
    default:
      return state;
  }
};
