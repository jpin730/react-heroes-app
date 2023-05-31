import { fireEvent, render, screen } from "@testing-library/react";

import { SearchPage } from "../../../src/heroes";
import { MemoryRouter } from "react-router-dom";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("SearchPage", () => {
  test("should render with default values", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
    expect(screen.getByText("Search a hero")).toBeTruthy();
  });

  test("should render results", () => {
    render(
      <MemoryRouter initialEntries={["/search?query=batman"]}>
        <SearchPage />
      </MemoryRouter>
    );

    expect(screen.getByRole("img").src).toContain("dc-batman.jpg");
    expect(screen.getByRole("heading", { level: 5 }).innerHTML).toContain(
      "Batman"
    );
  });

  test("should render alert on no results", () => {
    render(
      <MemoryRouter initialEntries={["/search?query=invalid-hero-name"]}>
        <SearchPage />
      </MemoryRouter>
    );

    expect(screen.getByText("No hero with name")).toBeTruthy();
    expect(screen.getByText('"invalid-hero-name"')).toBeTruthy();
  });

  test("should call navigate with query on submit search", () => {
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const searchInput = screen.getByRole("textbox");
    const value = "superman";
    fireEvent.change(searchInput, {
      target: { name: "searchText", value },
    });
    expect(searchInput.value).toBe(value);
    const searchBtn = screen.getByRole("button");
    fireEvent.click(searchBtn);
    expect(mockedUseNavigate).toHaveBeenCalledWith("?query=superman");
    expect(searchInput.value).toBe("");
  });
});
