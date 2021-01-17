import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.recipe;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      name,
      ingredients,
      method,
      serves,
      imageUrl,
      course,
      cuisine,
      prepTime,
      cookTime,
    } = this.state;
    const recipe = {
      name: name,
      ingredients: ingredients,
      method: method,
      serves: serves,
      image_url: imageUrl,
      user_id: this.props.currentUser.data.id,
      cuisine: cuisine,
      prep_time: prepTime,
      cook_time: cookTime,
      course: course,
      id: this.props.recipe.id
    };
    this.props.handleSubmit(recipe);
  };

  render() {
    const recipeAttributes = this.props.recipe.attributes
    return (
      <div className="recipe-card">
        <Form onSubmit={(event) => this.handleSubmit(event)}>
          <Row xs={1} sm={2} md={3} lg={3}>
            <Col>
              <Form.Group>
                <Form.Label size="sm"> Name </Form.Label>
                <Form.Control
                  type="text"
                  className="mb-2 mr-sm-2"
                  size="sm"
                  name="name"
                  onChange={(event) => this.handleChange(event)}
                  defaultValue={recipeAttributes.name}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label size="sm"> Type of Course </Form.Label>
                <Form.Control
                  as="select"
                  className="mb-2 mr-sm-2"
                  size="sm"
                  name="course"
                  onChange={(event) => this.handleChange(event)}
                  defaultValue={recipeAttributes.course}
                >
                  <option value="">Select...</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Snack">Snack</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label size="sm"> Type of Cuisine </Form.Label>
                <Form.Control
                  as="select"
                  className="mb-2 mr-sm-2"
                  size="sm"
                  name="cuisine"
                  onChange={(event) => this.handleChange(event)}
                  defaultValue={recipeAttributes.cuisine}
                >
                  <option value="">Select...</option>
                  <option value="African">African</option>
                  <option value="American">American</option>
                  <option value="Chinese">Chinese</option>
                  <option value="English">English</option>
                  <option value="Hungarian">Hungarian</option>
                  <option value="Indian">Indian</option>
                  <option value="Italian">Italian</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Korean">Korean</option>
                  <option value="Mexican">Mexican</option>
                  <option value="Middle-Eastern">Middle-Eastern</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="South American">South American</option>
                  <option value="Thai">Thai</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label size="sm"> Serves </Form.Label>
                <Form.Control
                  className="mb-2 mr-sm-2"
                  type="number"
                  size="sm"
                  name="serves"
                  onChange={(event) => this.handleChange(event)}
                  defaultValue={recipeAttributes.serves}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label size="sm"> Cook Time (mins) </Form.Label>
                <Form.Control
                  className="mb-2 mr-sm-2"
                  type="number"
                  size="sm"
                  name="cookTime"
                  onChange={(event) => this.handleChange(event)}
                  defaultValue={recipeAttributes.cook_time}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label size="sm"> Preparation Time (mins)</Form.Label>
                <Form.Control
                  className="mb-2 mr-sm-2"
                  type="number"
                  size="sm"
                  name="prepTime"
                  onChange={(event) => this.handleChange(event)}
                  defaultValue={recipeAttributes.prep_time}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group>
            <Form.Label size="sm"> Ingredients </Form.Label>
            <Form.Control
              className="mb-2 mr-sm-2 overflow-hidden"
              id="note"
              as="textarea"
              rows={7}
              size="sm"
              name="ingredients"
              onChange={(event) => this.handleChange(event)}
              defaultValue={recipeAttributes.ingredients}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label size="sm"> Method </Form.Label>
            <Form.Control
              as="textarea"
              rows={7}
              className="mb-2 mr-sm-2"
              size="sm"
              name="method"
              onChange={(event) => this.handleChange(event)}
              defaultValue={recipeAttributes.method}
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
              defaultValue={recipeAttributes.image_url}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit Recipe
          </Button>
        </Form>
      </div>
    );
  }
}

export default FormComponent;
