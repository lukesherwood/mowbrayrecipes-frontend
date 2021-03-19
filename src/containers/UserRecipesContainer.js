import React from "react";
import { fetchUserRecipes, updateRecipe } from "../actions/recipeActions";
import { connect } from "react-redux";
import Recipes from "../components/Recipes";

class UserRecipesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUserRecipes();
  }

  render() {
    return (
      
      <div className="recipes-container">
        <h3 className="recipe-header">Your Recipes</h3>
        {/* <CreateRecipeForm currentUser={this.props.user}/> */}
        <Recipes recipes={this.props.recipes}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
    user: state.users.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserRecipes: () => dispatch(fetchUserRecipes()),
    updateRecipe: () => dispatch(updateRecipe()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRecipesContainer);
