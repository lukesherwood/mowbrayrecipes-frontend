import React from "react";
import { NavLink } from "react-router-dom";
import LogoutOrLogin from '../containers/LogoutOrLogin'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useSelector } from 'react-redux';

export default function NavbarClass () {
  const user = useSelector(state => state.users.user);
    return (
      <Navbar collapseOnSelect expand="sm" bg="navbar-light" variant="light">
        <Navbar.Brand as={NavLink} to='/'>
          <img src="/mowbray family recipes logo.png" alt="mowbray logo" width="200x"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="pills" className="mr-auto">
          { user ? (
            <>
            <Nav.Link as={NavLink} to='/user' exact>My Recipes</Nav.Link>
            <Nav.Link as={NavLink} to='/createRecipe' exact>Create a Recipe</Nav.Link>
              </>
          ) : null}
        </Nav>
        <LogoutOrLogin/>
        </Navbar.Collapse>
      </Navbar>
    );
  }

