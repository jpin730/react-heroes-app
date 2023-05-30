import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router";

describe("AppRouter", () => {
  test("should render login if not logged", () => {
    const contextValue = { logged: false };

    render(
      <MemoryRouter initialEntries={["/"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText("Login").length).toBe(2);
  });

  test("should render home if logged", () => {
    const contextValue = { logged: true };

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByRole("heading", { level: 5 }).length).toBe(3);
  });
});
