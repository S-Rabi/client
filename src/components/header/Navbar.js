import React from "react";
import { Divide as Hamburger } from "hamburger-react";
import logo from "../images/logo4.jpg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div className="navbar">
      <nav className="relative w-[100vw]  flex flex-wrap items-center justify-between  py-3 ">
        <div className="container px-1 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/">
              <img className="logo w-[100px]" src={logo} alt="logo" />
            </Link>

            <button
              className="text-[#021f3c] cursor-pointer text-l leading-none px-1 py-1 border border-solid border-transparent rounded  block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Hamburger />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">
              <Link to="/">
                <li className="nav-item">HOME</li>
              </Link>

              <NavLink to="/bevrages ">
                <li className="nav-item">BEVERAGES</li>
              </NavLink>
              <NavLink to="/dessert ">
                <li className="nav-item">DESSERT</li>
              </NavLink>
              <NavLink to="/reservationForm ">
                <li className="nav-item">RESERVATION</li>
              </NavLink>
              <Link to="/contact">
                <li className="nav-item">CONTACT</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
