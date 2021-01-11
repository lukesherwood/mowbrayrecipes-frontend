import "../App.css";
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { autoLogin } from "../actions/userActions";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "../components/Home";

import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import Container from "react-bootstrap/Container";
import RecipesContainer from "./RecipesContainer";
import NavbarClass from "../components/Navbar";
import UserRecipesContainer from "./UserRecipesContainer";
import CreateRecipeForm from "./CreateRecipeForm";
import RecipeShow from "../components/RecipeShow";
import { fetchRecipes } from "../actions/recipeActions";

class App extends Component {
  componentDidMount() {
    this.props.autoLogin();
    this.props.fetchRecipes();
  }

  notAuth() {
      alert(
        "Please sign-in to access this page"
      )
      return <Redirect to="/signIn"/>
  }

  render() {
    return (
      <div className="App">
        <NavbarClass />
        <Container fluid>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/user"
              render={() =>
                !this.props.loggedIn ? this.notAuth() : <UserRecipesContainer />
              }
            />
            <Route
              exact
              path="/createRecipe"
              render={() =>
                !this.props.loggedIn ? this.notAuth() : <CreateRecipeForm />
              }
            />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/recipes" component={RecipesContainer} />
            <Route
              path="/recipes/:id"
              render={(params) => (
                !this.props.loggedIn ? this.notAuth() : <RecipeShow recipes={this.props.recipes} params={params} />
              )}
            />
            <Route render={() => <h1>404: page not found</h1>} />{" "}
            {/* make this a component */}
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
    recipes: state.recipes.recipes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(autoLogin()),
    fetchRecipes: () => dispatch(fetchRecipes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
