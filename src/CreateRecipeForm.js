import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import { createRecipe } from "./actions/recipeActions";


class CreateRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, ingredients, method } = this.state;
    let recipe = {
      name: name,
      ingredients: ingredients,
      method: method,
      user_id: this.props.currentUser.id,
    };
    this.props.createRecipe(recipe);
    this.setState({
      name: "",
      ingredients: "",
      method: "",

    })
    // document.getElementById('toggle-new-list-form').click()
  };

  render() {
    const { name, ingredients, method } = this.state;
    return (
      <div className="recipe-card">
        <h3>Create a new Recipe</h3>
        <Form inline onSubmit={(event) => this.handleSubmit(event)}>
          <Form.Group>
            <Form.Label size="sm"> Name </Form.Label>
            <Form.Control
              required
              type="text"
              className="mb-2 mr-sm-2"
              size="sm"
              name="name"
              onChange={(event) => this.handleChange(event)}
              value={name}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label size="sm"> Ingredients </Form.Label>
            <Form.Control
              className="mb-2 mr-sm-2"
              type="text"
              size="sm"
              name="ingredients"
              onChange={(event) => this.handleChange(event)}
              value={ingredients}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label size="sm"> Method </Form.Label>
            <Form.Control
              required
              type="text"
              className="mb-2 mr-sm-2"
              size="sm"
              name="method"
              onChange={(event) => this.handleChange(event)}
              value={method}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create Recipe
          </Button>
        </Form>
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
