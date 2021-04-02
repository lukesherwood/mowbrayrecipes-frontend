import React from "react";
import { fetchRecipes, deleteRecipe } from "../actions/recipeActions";
import { connect } from "react-redux";
import Recipes from "../components/Recipes";
import Loader from "react-loader-spinner";

class RecipesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    const { loading } = this.props;
    return (
      <div className="recipe-container">
        <h3 className="header-theme">Recipes</h3>
        {loading ? (
          <div className="vh-100 w-100">
            <Loader
              className="text-center"
              type="TailSpin"
              color="#00BFFF"
              height={80}
              width={80}
            />
          </div>
        ) : (
          <Recipes
            recipes={this.props.recipes}
            deleteRecipe={this.props.deleteRecipe}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.recipes.loading,
    recipes: state.recipes.recipes,
    user: state.users.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipes: () => dispatch(fetchRecipes()),
    deleteRecipe: (recipe) => dispatch(deleteRecipe(recipe)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);
