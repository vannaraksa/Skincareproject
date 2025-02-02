import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <nav className="container-fluid bg-success">
        <div className="container d-flex">
          <div className="col-4">
            <a
              href="#"
              className="fw-bold text-decoration-none text-light fs-2"
            >
              Krete
            </a>
          </div>
          <div className="col-4">
            <ul className="nav text-light fw-bold justify-content-center">
              <li className="px-2 py-3">
                <NavLink
                  to="/"
                  className="text-decoration-none text-light fs-6"
                >
                  Home
                </NavLink>
              </li>
              <li className="px-2 py-3">
                <NavLink
                  to="/product"
                  className="text-decoration-none text-light fs-6"
                >
                  Product
                </NavLink>
              </li>
              <li className="px-2 py-3">
                <NavLink
                  to="/about"
                  className="text-decoration-none text-light fs-6"
                >
                  About Us
                </NavLink>
              </li>
              <li className="px-2 py-3">
                <NavLink
                  to="/contact"
                  className="text-decoration-none text-light fs-6"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-4"></div>
        </div>
      </nav>
    </>
  );
}

export default Header;
