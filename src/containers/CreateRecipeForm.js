import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import { createRecipe } from "../actions/recipeActions";


class CreateRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      ingredients: "",
      method: "",
      notes: "",
      imageUrl: "",
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
    const { name, ingredients, method, notes, imageUrl } = this.state;
    let recipe = {
      name: name,
      ingredients: ingredients,
      method: method,
      notes: notes,
      image_url: imageUrl,
      user_id: this.props.currentUser.id,
    };
    this.props.createRecipe(recipe);
    this.setState({
      name: "",
      ingredients: "",
      method: "",
      notes: "",
      imageUrl: "",
    })
    // document.getElementById('toggle-new-list-form').click()
  };

  render() {
    const { name, ingredients, method, notes, imageUrl} = this.state;
    return (
      <div className="recipe-card">
        <h3>Create a new Recipe</h3>
        <Form onSubmit={(event) => this.handleSubmit(event)}>
          <Form.Group>
            <Form.Label size="sm"> Name </Form.Label>
            <Form.Control
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
              as="textarea" 
              rows={3}
              size="sm"
              name="ingredients"
              onChange={(event) => this.handleChange(event)}
              value={ingredients}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label size="sm"> Method </Form.Label>
            <Form.Control
              as="textarea" 
              rows={3}
              className="mb-2 mr-sm-2"
              size="sm"
              name="method"
              onChange={(event) => this.handleChange(event)}
              value={method}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label size="sm"> Notes </Form.Label>
            <Form.Control
              placeholder="For example: serves how many people, things to keep an eye out for, total duration of cooking."
              className="mb-2 mr-sm-2"
              type="text"
              size="sm"
              name="notes"
              onChange={(event) => this.handleChange(event)}
              value={notes}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label size="sm"> Image </Form.Label>
            <Form.Control
              className="mb-2 mr-sm-2"
              type="text"
              size="sm"
              name="imageUrl"
              onChange={(event) => this.handleChange(event)}
              value={imageUrl}
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
