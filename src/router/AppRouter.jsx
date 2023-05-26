import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "../shared";
import { DcComicsPage, MarvelPage } from "../heroes";
import { LoginPage } from "../auth";

export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <div className="container py-3">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc-comics" element={<DcComicsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<Navigate to={"/marvel"} />} />
        </Routes>
      </div>
    </>
  );
};
