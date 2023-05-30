import { types } from "../../../src/auth";

describe("types", () => {
  test("should return correct types", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
