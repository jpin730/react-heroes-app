import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../context";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogin = () => {
    login("jpin730");
    navigate("/", { replace: true });
  };

  return (
    <div className="d-flex min-vh-100">
      <div className="m-auto border rounded bg-white text-center p-5">
        <h1 className="px-5">Login</h1>
        <hr />
        <button className="btn btn-primary px-4" onClick={onLogin}>
          Login
        </button>
      </div>
    </div>
  );
};
