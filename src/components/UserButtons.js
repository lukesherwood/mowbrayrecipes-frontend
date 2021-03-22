import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { deleteRecipe } from "../actions/recipeActions";
import { connect } from "react-redux";

class UserButtons extends React.Component {
  // could go back to functional component and useSelector
  handleClick(inputRecipe) {
    this.props.deleteRecipe(inputRecipe);
  }

  render() {
    const user = this.props.user || "";
    const recipeAuthor = this.props.recipe.relationships.user.data || "";
    return (
      <div>
        {user.id === parseInt(recipeAuthor.id) ? (
          <>
            <Link
              className="btn btn-outline-warning btn-sm"
              to={`/recipes/${this.props.recipe.id}/update`}
            >
              Update
            </Link>
            <Button
              variant="outline-danger btn-sm"
              onClick={(e) => this.handleClick(this.props.recipe)}
            >
              Delete
            </Button>
          </>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    user: state.users.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteRecipe: (recipe) => dispatch(deleteRecipe(recipe)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserButtons);
