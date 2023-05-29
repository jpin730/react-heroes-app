import { Navigate, Route, Routes } from "react-router-dom";

import {
  DcComicsPage,
  HeroPage,
  HomePage,
  MarvelPage,
  SearchPage,
} from "../pages";
import { Navbar } from "../../shared";

export const HeroesRoutes = () => {
  const routes = [
    {
      path: "marvel",
      element: <MarvelPage />,
    },
    {
      path: "dc-comics",
      element: <DcComicsPage />,
    },
    {
      path: "search",
      element: <SearchPage />,
    },
    {
      path: "hero/:id",
      element: <HeroPage />,
    },
    {
      path: "/",
      element: <HomePage />,
    },
  ];

  return (
    <>
      <Navbar />

      <div className="container py-3">
        <Routes>
          {routes.map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}

          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
      </div>
    </>
  );
};
