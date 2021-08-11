import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { Fade } from "react-reveal";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Tooltip } from "react-tippy";

const NavBar = () => {
  return (
    <>
      <Fade left>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a class="navbar-brand" href="#">
              SCORES
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navlinks navbar-nav mr-auto mb-auto mt-auto mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/"
                    className="nav-link active"
                    aria-current="page"
                    activeClassName="active__nav__link"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="live-scores"
                    className="nav-link active"
                    aria-current="page"
                    activeClassName="active__nav__link"
                  >
                    Live Scores
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/schedule"
                    className="nav-link active"
                    aria-current="page"
                    activeClassName="active__nav__link"
                  >
                    Schedule
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Link
                    exact
                    className="nav-link active"
                    aria-current="page"
                    activeClassName="active__nav__link"
                  >
                    News
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    exact
                    className="nav-link active"
                    aria-current="page"
                    activeClassName="active__nav__link"
                  >
                    Tournaments
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    exact
                    className="nav-link active"
                    aria-current="page"
                    activeClassName="active__nav__link"
                  >
                    Pools
                  </Link>
                </li>
                <Tooltip
                  // options
                  title="Login"
                  position="bottom"
                  trigger="mouseenter"
                  animation="shift"
                  followCursor="true"
                >
                  {" "}
                  <li className="nav-item">
                    <Link
                      exact
                      className="nav-link active"
                      aria-current="page"
                      activeClassName="active__nav__link"
                      style={{ marginLeft: "auto !important" }}
                    >
                      <ExitToAppIcon />
                    </Link>
                  </li>
                </Tooltip>

                {/* <li className="navbar__dropdown nav-item dropdown">
                <Link
                  className="nav-link active dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  activeClassName="active__nav__link"
                >
                  Our Services
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/main-services">
                      Main Services
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      exact
                      className="dropdown-item"
                      activeClassName="active__nav__link"
                    >
                      Blockchain Devlopment
                    </Link>
                  </li>
                  <li>
                    <Link
                      exact
                      className="dropdown-item"
                      activeClassName="active__nav__link"
                    >
                      Ruby On Rails
                    </Link>
                  </li>
                  <li>
                    <Link
                      exact
                      className="dropdown-item"
                      activeClassName="active__nav__link"
                    >
                      App Devlopment
                    </Link>
                  </li>
                  <li>
                    <Link
                      exact
                      className="dropdown-item"
                      activeClassName="active__nav__link"
                    >
                      Designing Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      exact
                      className="dropdown-item"
                      activeClassName="active__nav__link"
                    >
                      .NET Devlopment
                    </Link>
                  </li>
                </ul>
              </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </Fade>
    </>
  );
};

export default NavBar;
