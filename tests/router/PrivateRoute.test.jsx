import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { PrivateRoute } from "../../src/router";
import { AuthContext } from "../../src/auth";

describe("PrivateRoute", () => {
  test("should render children if logged", () => {
    const contextValue = { logged: true };

    render(
      <AuthContext.Provider value={contextValue}>
        <PrivateRoute>
          <h1>Children Content</h1>
        </PrivateRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Children Content")).toBeTruthy();
  });

  test("should navigate from home to login if not logged", () => {
    const contextValue = { logged: false };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <h1>Children Content</h1>
                </PrivateRoute>
              }
            />
            <Route path="login" element={<h1>Login</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Login")).toBeTruthy();
  });
});
