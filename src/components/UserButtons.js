import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Link } from "react-router-dom";
import { deleteRecipe } from "../actions/recipeActions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class UserButtons extends React.Component {
  // could go back to functional component and useSelector
  handleClick = (event) => {
    event.preventDefault();
    this.props.deleteRecipe(this.props.recipe);
    this.props.history.goBack(); // the key to using this was to add withRouter!!
  }

  render() {
    const user = this.props.user || "";
    const recipeAuthor = this.props.recipe.relationships.user.data || "";
    return (
      <ButtonGroup>
        {user.id === parseInt(recipeAuthor.id) ? (
          <>
            <Link
              className="btn btn-outline-warning"
              to={`/recipes/${this.props.recipe.id}/update`}
            >
              Update
            </Link>
            <Button
              variant="outline-danger"
              onClick={this.handleClick}
            >
              Delete
            </Button>
          </>
        ) : null}
      </ButtonGroup>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.users.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteRecipe: (recipe) => dispatch(deleteRecipe(recipe)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserButtons));
