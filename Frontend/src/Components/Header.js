// src/Components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

function Header() {
  return (
    <Navbar color="dark" dark expand="md">
      <Link to="/" className="navbar-brand">
        Employee Management
      </Link>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/employee-list">
            Employee List
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/add-employee">
            Add Employee
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to="/contact">
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Header;
