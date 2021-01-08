import React from "react";
import { fetchRecipes } from "./actions/recipeActions";
import { connect } from "react-redux";
import CreateRecipeForm from "./CreateRecipeForm";

class RecipesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    return (
      <div className="recipes-container">
        {/* <Recipes recipes={this.props.recipes} fetchRecipes={this.props.fetchRecipes} /> */}
        <CreateRecipeForm currentUser={this.props.user}/>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);
