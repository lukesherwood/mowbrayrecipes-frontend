import React from "react";
import { NavLink } from "react-router-dom";
import LogoutOrLogin from './LogoutOrLogin'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useSelector } from 'react-redux';

export default function NavbarClass () {
  const user = useSelector(state => state.users.user);
    return (
      <Navbar collapseOnSelect expand="sm" bg="navbar-light" variant="light">
        <Navbar.Brand as={NavLink} to='/'>
          <img src="/mowbray family recipes logo.png" alt="mowbray logo" width="195px" height="200px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="pills" className="mr-auto">
          { user ?
         <Nav.Link as={NavLink} to='/recipes' exact>Recipes</Nav.Link>
          : null}
        {/* <>
        <Nav.Link as={NavLink} to='/hikes' exact>Hikes</Nav.Link>
        </> */}
        </Nav>
        <LogoutOrLogin/>
        </Navbar.Collapse>
      </Navbar>
    );
  }

