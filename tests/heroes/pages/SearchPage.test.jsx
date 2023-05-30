import { render, screen } from "@testing-library/react";

import { SearchPage } from "../../../src/heroes";
import { MemoryRouter } from "react-router-dom";

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
    const { container } = render(
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
    const { container } = render(
      <MemoryRouter initialEntries={["/search?query=invalid-hero-name"]}>
        <SearchPage />
      </MemoryRouter>
    );

    expect(screen.getByText("No hero with name")).toBeTruthy();
    expect(screen.getByText('"invalid-hero-name"')).toBeTruthy();
  });
});
