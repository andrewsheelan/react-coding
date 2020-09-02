import { types } from ".";

export const loginStarted = (email, password) => {
  return {
    type: types.LOGIN_STARTED,
    email,
    password,
  };
};

export const logoutStarted = () => {
  return {
    type: types.LOGOUT_STARTED,
  };
};
