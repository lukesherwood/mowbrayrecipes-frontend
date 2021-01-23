import React from "react";
import { fetchRecipes, deleteRecipe } from "../actions/recipeActions";
import { connect } from "react-redux";
import Recipes from "../components/Recipes";


class RecipesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    return (
      <div className="recipes-container">
        <Recipes recipes={this.props.recipes} deleteRecipe={this.props.deleteRecipe}/>
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
    fetchRecipes: () => dispatch(fetchRecipes()),
    deleteRecipe: (recipe) => dispatch(deleteRecipe(recipe)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);
