import "../scss/App.scss";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
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
import RecipeUpdate from "./RecipeUpdate";
import AuthRoutes from "../components/AuthRoutes";


class App extends Component {
  componentDidMount() {
    this.props.autoLogin();
    this.props.fetchRecipes();
  }

  render() {
    return (
      <div className="App">
        <NavbarClass />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/signUp" component={SignUp} />
            <AuthRoutes
              path="/recipes/:id/update"
              loggedIn={this.props.loggedIn}
              render={(params) => <RecipeUpdate params={params} />}
            />
            <Route
              path="/recipes/:id"
              render={(params) => (
                <RecipeShow recipes={this.props.recipes} params={params} loggedIn={this.props.loggedIn}/>
              )}
            />
            <Route exact path="/recipes" component={RecipesContainer} />
            <AuthRoutes
              exact
              path="/user"
              loggedIn={this.props.loggedIn}
              component={UserRecipesContainer}
            />
            <AuthRoutes
              exact
              path="/createRecipe"
              loggedIn={this.props.loggedIn}
              render={() => (
                <CreateRecipeForm currentUser={this.props.currentUser} />
              )}
            />
            <Route render={() => <h1>404: page not found</h1>} />{" "}
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
    currentUser: state.users.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(autoLogin()),
    fetchRecipes: () => dispatch(fetchRecipes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
