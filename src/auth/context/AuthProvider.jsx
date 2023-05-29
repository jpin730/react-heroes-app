import { useReducer } from "react";

import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types";

const initialState = { logged: false, username: null };

const init = () => {
  const username = localStorage.getItem("username");

  return { logged: !!username, username };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState, init);

  const login = (username = "") => {
    localStorage.setItem("username", username);
    const action = { type: types.login, payload: username };
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("username");
    const action = { type: types.logout };
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
