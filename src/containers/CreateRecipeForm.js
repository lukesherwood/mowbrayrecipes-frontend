import React, { Component } from "react";
import { connect } from "react-redux";
import { createRecipe } from "../actions/recipeActions";
import FormComponent from "./FormComponent";

class CreateRecipeForm extends Component {

  recipe = {
    name: "",
    ingredients: "",
    method: "",
    serves: "",
    imageUrl: "",
    course: "",
    cuisine: "",
    cookTime: "",
    prepTime: "",
  };

  handleSubmit = (recipe) => {
    this.props.createRecipe(recipe);
    this.setState(recipe);
    // document.getElementById('toggle-new-list-form').click()
  };

  render() {
    return (
      <div className="recipe-card">
        <h3>Create a new Recipe</h3>
        <FormComponent recipe={this.recipe} handleSubmit={this.handleSubmit} currentUser={this.props.currentUser}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createRecipe: (recipeInfo) => dispatch(createRecipe(recipeInfo)),
  };
};

export default connect(null, mapDispatchToProps)(CreateRecipeForm);
