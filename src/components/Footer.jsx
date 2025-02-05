import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="container-fluid bg-black mb-5 pb-5 mb-lg-0 py-lg-3">
      <div className="container">
        <div className="row m-0 ">
          <div className="col-lg-4" style={{ fontSize: "100px" }}>
            <p className="text-light">Krete</p>
          </div>
          <div className="col-lg-4 fs-5 d-flex ">
            <div className="col-md-6 mx-1">
              <ul className="list-unstyled">
                <li>
                  <NavLink className="text-decoration-none text-light py-1">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-decoration-none text-light py-1">
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-decoration-none text-light py-1">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-decoration-none text-light py-1">
                    Help
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-decoration-none text-light py-1">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-decoration-none text-light py-1">
                    Account
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li>
                  <NavLink className="text-decoration-none text-light py-1">
                    Shipping & Returns
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-decoration-none text-light py-1">
                    Track your order
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-decoration-none text-light py-1">
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-decoration-none text-light py-1">
                    Terms & Rights
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-decoration-none text-light py-1">
                    Accessibility Statement
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <form action="">
              <input type="text" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
