import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Game.png";
import { Navbar } from "flowbite-react";

const Nav = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="/">
        <img
          src={logo}
          className="mr-3 h-6 sm:h-9"
          alt="Game of thrones logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Game of thrones
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link className="text-blue-700" to="/">
          Home
        </Link>
        <Link className="text-red-700" to="/characters">
          Characters
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
