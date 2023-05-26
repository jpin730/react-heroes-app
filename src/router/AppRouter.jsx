import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "../shared";
import { DcComicsPage, MarvelPage } from "../heroes";
import { LoginPage } from "../auth";

export const AppRouter = () => {
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
      path: "login",
      component: <LoginPage />,
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
          <Route path="/" element={<Navigate to={"/marvel"} />} />
        </Routes>
      </div>
    </>
  );
};
