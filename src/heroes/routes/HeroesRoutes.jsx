import { Navigate, Route, Routes } from "react-router-dom";

import { DcComicsPage, HeroPage, MarvelPage, SearchPage } from "../pages";
import { Navbar } from "../../shared";

export const HeroesRoutes = () => {
  const routes = [
    {
      path: "marvel",
      component: <MarvelPage />,
    },
    {
      path: "dc-comics",
      component: <DcComicsPage />,
    },
    {
      path: "search",
      component: <SearchPage />,
    },
    {
      path: "hero",
      component: <HeroPage />,
    },
  ];

  return (
    <>
      <Navbar />

      <div className="container py-3">
        <Routes>
          {routes.map((route) => (
            <Route
              path={route.path}
              element={route.component}
              key={route.path}
            />
          ))}

          <Route path="/*" element={<Navigate to={"/marvel"} />} />
        </Routes>
      </div>
    </>
  );
};
