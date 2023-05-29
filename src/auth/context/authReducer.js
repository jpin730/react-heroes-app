import { types } from "../types";

export const authReducer = (state, action) => {
  switch (action.type) {
    case types.login:
      return { logged: true, username: action.payload };

    case types.logout:
      return { logged: false, username: null };

    default:
      return state;
  }
};
