import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi";
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
          <div className="col-8 d-flex">
            <ul className="nav text-light fw-bold d-none d-lg-flex">
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
          <div className="px-2 py-2 d-none d-lg-block">
            <div className="d-flex justify-content-end">
              <NavLink>
                <IoMdCart className="fs-2 text-decoration-none text-light" />
              </NavLink>
              <NavLink>
                <HiMenuAlt2 className="fs-2 text-decoration-none text-light" />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
