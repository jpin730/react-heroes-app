import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../auth";

export const Navbar = () => {
  const navigate = useNavigate();

  const { username, logout } = useContext(AuthContext);

  const navItems = [
    {
      name: "Marvel Comics",
      path: "/marvel",
    },
    {
      name: "DC Comics",
      path: "/dc-comics",
    },
    {
      name: "Search",
      path: "/search",
    },
  ];

  const getNavLinkClassName = ({ isActive }) =>
    `nav-link ${isActive ? "active" : ""}`;

  const onLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <nav
      className="navbar sticky-top navbar-expand-lg bg-dark"
      data-bs-theme="dark"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          React Heroes App
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {navItems.map((navItem) => (
              <li className="nav-item" key={navItem.path}>
                <NavLink className={getNavLinkClassName} to={navItem.path}>
                  {navItem.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="navbar-text d-flex">
            <span className="align-self-center px-lg-2">{username}</span>
            <a
              className="nav-link text-decoration-underline btn px-0 ms-auto ms-lg-2"
              onClick={onLogout}
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
