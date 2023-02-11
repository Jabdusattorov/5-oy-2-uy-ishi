import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-white bg-slate-800 py-3 fs-3 sticky-top shadow">
      <nav className="container d-flex align-items-center justify-content-between px-5">
        <Link className="text-reset text-decoration-none" to="/">
          <img src="/images/vite.svg" alt="LOGO" />
        </Link>

        <div className="d-flex align-items-center border rounded p-2 px-3">
          <i className="fa-solid fa-search fs-5"></i>
          <input className="ps-3 bg-transparent border-0 fs-5 text-white" type="search" placeholder="Search"/>
        </div>

        <ul className="list-unstyled m-0 d-flex align-items-center gap-3">
          <li>
            <Link className="text-reset text-decoration-none" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-reset text-decoration-none" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="text-reset text-decoration-none" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
