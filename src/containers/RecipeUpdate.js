import React, { Component } from "react";
import { connect } from "react-redux";
import { updateRecipe, fetchRecipes } from "../actions/recipeActions";
import FormComponent from "./FormComponent";

export class RecipeUpdate extends Component {

  componentDidMount(){
    this.props.fetchRecipes()
  }

  blankRecipe = {
    name: "",
    ingredients: "",
    method: "",
    serves: "",
    image_url: "",
    course: "",
    cuisine: "",
    cook_time: "",
    prep_time: "",
  };
 

  handleSubmit = (recipe) => {
    this.props.updateRecipe(recipe);
    this.setState(this.blankRecipe);
    // document.getElementById('toggle-new-list-form').click()
  };

  render() {
    const recipe = this.props.recipes.find((r) => r.id === this.props.params.match.params.id)
    return (
      recipe? (
      <div className="recipe-card">
        <h3>Edit Recipe</h3>
        <FormComponent recipe={recipe} handleSubmit={this.handleSubmit} currentUser={this.props.currentUser}/>
      </div>
      ): null
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.user,
    recipes: state.recipes.recipes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateRecipe: (recipeInfo) => dispatch(updateRecipe(recipeInfo)),
    fetchRecipes: () => dispatch(fetchRecipes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeUpdate);
