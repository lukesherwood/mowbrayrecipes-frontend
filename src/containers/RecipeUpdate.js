import React, { Component } from "react";
import { connect } from "react-redux";
import { updateRecipe, fetchRecipes } from "../actions/recipeActions";
import FormComponent from "../components/FormComponent";

class RecipeUpdate extends Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  handleSubmit = (recipe, id) => {
    this.props.updateRecipe(recipe, id);
  };

  render() {
    const recipe = this.props.recipes.find(
      (r) => r.id === this.props.params.match.params.id
    );
    return recipe ? (
      <div className="form-container">
      <h3 className="recipe-header">Edit Recipe</h3>
        <FormComponent
          recipe={recipe}
          handleSubmit={this.handleSubmit}
          currentUser={this.props.currentUser}
        />
      </div>
    ) : null;
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.user,
    recipes: state.recipes.recipes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateRecipe: (recipeInfo, id) => dispatch(updateRecipe(recipeInfo, id)),
    fetchRecipes: () => dispatch(fetchRecipes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeUpdate);
