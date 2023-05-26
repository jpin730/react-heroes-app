import { Navigate, Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";

export const AppRouter = () => {
  const routes = [
    {
      path: "login",
      component: <LoginPage />,
    },
    {
      path: "/*",
      component: <HeroesRoutes />,
    },
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.component} key={route.path} />
      ))}
    </Routes>
  );
};
