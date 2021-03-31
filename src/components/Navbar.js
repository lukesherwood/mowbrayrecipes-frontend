import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import LogoutOrLogin from "../containers/LogoutOrLogin";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import SearchRecipesForm from "../containers/SearchRecipesForm";


class NavbarClass extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="navbar-light" variant="light">
        <Navbar.Brand as={NavLink} to="/">
          <img
            src="/mowbray family recipes logo.png"
            alt="mowbray logo"
            width="200x"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" className="mr-auto">
            {this.props.loggedIn ? (
              <>
                <Nav.Link as={NavLink} to="/user" exact>
                  My Recipes
                </Nav.Link>
                <Nav.Link as={NavLink} to="/createRecipe" exact>
                  New Recipe
                </Nav.Link>
              </>
            ) : null}
          </Nav>
          <SearchRecipesForm />
          <LogoutOrLogin />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loggedIn: state.users.loggedIn,
  };
};

export default connect(mapStateToProps, null)(NavbarClass);
