import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { PublicRoute } from "../../src/router";
import { AuthContext } from "../../src/auth";

describe("PublicRoute", () => {
  test("should render children if not logged", () => {
    const contextValue = { logged: false };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Children Content</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Children Content")).toBeTruthy();
  });

  test("should navigate from login to home if logged", () => {
    const contextValue = { logged: true };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Children Content</h1>
                </PublicRoute>
              }
            />
            <Route path="/" element={<h1>Home</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Home")).toBeTruthy();
  });
});
