import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";

import { Navbar } from "../../../src/shared";
import { AuthContext } from "../../../src/auth";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("NavBar", () => {
  const contextValue = {
    logged: true,
    username: "mocked-username",
    logout: jest.fn(),
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("should render username", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText(contextValue.username)).toBeTruthy();
  });

  test("should call logout and navigate on click logout button", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const logoutBtn = screen.getByText("Logout");
    fireEvent.click(logoutBtn);

    expect(contextValue.logout).toHaveBeenCalledTimes(1);
    expect(mockedUseNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
