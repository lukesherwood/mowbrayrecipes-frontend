import "../App.css";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { autoLogin, logUserOut } from "../actions/userActions";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "../components/Home";

import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import Container from "react-bootstrap/Container";
import RecipesContainer from "./RecipesContainer";
import NavbarClass from "../components/Navbar";
import UserRecipesContainer from "./UserRecipesContainer";
import createRecipeForm from './CreateRecipeForm'

class App extends Component {
  componentDidMount() {
    this.props.autoLogin();
  }
  render() {
    return (
      <div className="App">
        <NavbarClass/>
        <Container fluid>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/recipes" component={RecipesContainer} />
            <Route exact path="/user" component={UserRecipesContainer} />
            <Route exact path="/createRecipe" component={createRecipeForm} />
          </Switch>
          <NotificationContainer />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.users.loggedIn,
    user: state.users.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(autoLogin()),
    logUserOut: () => dispatch(logUserOut()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
