import { types } from "../actions";

const initState = {
  loggedIn: false,
  activeKey: "login",
};

export default (state = initState, action) => {
  switch (action.type) {
    case types.LOGIN_STARTED:
      return {
        loggedIn: true,
        activeKey: "todos",
      };
    case types.LOGOUT_STARTED:
      return {
        loggedIn: false,
        activeKey: "login",
      };
      case types.CHANGE_TABS:
        return {
          loggedIn: true,
          activeKey: action.activeKey,
        };
    default:
      return state;
  }
};
