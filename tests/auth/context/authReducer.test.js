import { authReducer, types } from "../../../src/auth";

describe("authReducer", () => {
  test("should return initial state", () => {
    const initialState = { logged: false, username: null };
    const state = authReducer(initialState, {});

    expect(state).toEqual(initialState);
  });

  test("should return correct state on login action", () => {
    const initialState = { logged: false, username: null };
    const username = "mockedUsername";
    const action = { type: types.login, payload: username };
    const state = authReducer(initialState, action);

    expect(state).toEqual({ logged: true, username });
  });

  test("should return correct state on logout action", () => {
    const username = "mockedUsername";
    const initialState = { logged: true, username };
    const action = { type: types.logout, payload: username };
    const state = authReducer(initialState, action);

    expect(state).toEqual({ logged: false, username: null });
  });
});
