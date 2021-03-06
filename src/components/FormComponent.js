import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router-dom";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
});
class FormComponent extends Component {

  render() {
    const recipeAttributes = this.props.recipe.attributes;
    return (
      <div className="form-card">
        <Formik
          initialValues={{
            name: recipeAttributes.name,
            ingredients: recipeAttributes.ingredients,
            method: recipeAttributes.method,
            serves: recipeAttributes.serves,
            imageUrl: recipeAttributes.image_url,
            cuisine: recipeAttributes.cuisine,
            prepTime: recipeAttributes.prep_time,
            cookTime: recipeAttributes.cook_time,
            description: recipeAttributes.description,
            course: recipeAttributes.course,
            image: recipeAttributes.image,
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            let {
              name,
              ingredients,
              method,
              serves,
              imageUrl,
              cuisine,
              prepTime,
              cookTime,
              description,
              course,
              image
            } = values;
            let data = new FormData();
            image ? data.append("recipe[image]", image) : data.append("recipe[image_url]", imageUrl);
            data.append("recipe[name]", name)
            data.append("recipe[ingredients]", ingredients)
            data.append("recipe[method]", method)
            data.append("recipe[serves]", serves)
            data.append("recipe[cuisine]", cuisine)
            data.append("recipe[prep_time]", prepTime)
            data.append("recipe[cook_time]", cookTime)
            data.append("recipe[description]", description)
            data.append("recipe[course]", course)
            data.append("recipe[user_id]", this.props.currentUser.id)
            let id = this.props.recipe.id || null
            id ? data.append("recipe[id]", this.props.recipe.id) : id = null
            this.props.handleSubmit(data, id );
            id
              ? this.props.history.push(`/recipes/${id}`)
              : this.props.history.goBack()
            resetForm();
            setSubmitting(false);
          }}
        >
          {({ touched, errors, handleSubmit, isSubmitting, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <Row xs={1} sm={2} md={3} lg={3}>
                <Col>
                  <Form.Group>
                    <Form.Label size="sm"> Name </Form.Label>
                    <Field
                      className={
                        "mb-2 mr-sm-2 form-control " +
                        (errors.name && touched.name ? "is-invalid" : "")
                      }
                      size="sm"
                      name="name"
                      type="text"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label size="sm"> Type of Course </Form.Label>
                    <Field
                      as="select"
                      className={
                        "mb-2 mr-sm-2 form-control " +
                        (errors.course && touched.course ? "is-invalid" : "")
                      }
                      size="sm"
                      name="course"
                    >
                      <option value="">Select...</option>
                      <option value="Breakfast">Breakfast</option>
                      <option value="Lunch">Lunch</option>
                      <option value="Dinner">Dinner</option>
                      <option value="Dessert">Dessert</option>
                      <option value="Snack">Snack</option>
                    </Field>
                    <ErrorMessage
                      name="course"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label size="sm"> Type of Cuisine </Form.Label>
                    <Field
                      as="select"
                      className={
                        "mb-2 mr-sm-2 form-control " +
                        (errors.cuisine && touched.cuisine ? "is-invalid" : "")
                      }
                      size="sm"
                      name="cuisine"
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
                    </Field>
                    <ErrorMessage
                      name="cuisine"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label size="sm"> Serves </Form.Label>
                    <Field
                      className={
                        "mb-2 mr-sm-2 form-control " +
                        (errors.serves && touched.serves ? "is-invalid" : "")
                      }
                      type="number"
                      size="sm"
                      name="serves"
                    />
                    <ErrorMessage
                      name="serves"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label size="sm"> Cook Time (mins) </Form.Label>
                    <Field
                      className={
                        "mb-2 mr-sm-2 form-control " +
                        (errors.cookTime && touched.cookTime
                          ? "is-invalid"
                          : "")
                      }
                      type="number"
                      size="sm"
                      name="cookTime"
                    />
                    <ErrorMessage
                      name="cookTime"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label size="sm"> Preparation Time (mins)</Form.Label>
                    <Field
                      className={
                        "mb-2 mr-sm-2 form-control " +
                        (errors.prepTime && touched.prepTime
                          ? "is-invalid"
                          : "")
                      }
                      type="number"
                      size="sm"
                      name="prepTime"
                    />
                    <ErrorMessage
                      name="prepTime"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group>
                <Form.Label size="sm"> Description or Notes </Form.Label>
                <Field
                  className={
                    "mb-2 mr-sm-2 form-control " +
                    (errors.description && touched.description
                      ? "is-invalid"
                      : "")
                  }
                  as="textarea"
                  rows={3}
                  size="sm"
                  name="description"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="invalid-feedback"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label size="sm"> Ingredients </Form.Label>
                <Field
                  className={
                    "mb-2 mr-sm-2 form-control " +
                    (errors.ingredients && touched.ingredients
                      ? "is-invalid"
                      : "")
                  }
                  id="note"
                  as="textarea"
                  rows={7}
                  size="sm"
                  name="ingredients"
                />
                <ErrorMessage
                  name="ingredients"
                  component="div"
                  className="invalid-feedback"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label size="sm"> Method </Form.Label>
                <Field
                  as="textarea"
                  rows={7}
                  className={
                    "mb-2 mr-sm-2 form-control " +
                    (errors.method && touched.method ? "is-invalid" : "")
                  }
                  size="sm"
                  name="method"
                />
                <ErrorMessage
                  name="method"
                  component="div"
                  className="invalid-feedback"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label size="sm"> Image </Form.Label>
                <Field
                  className={
                    "mb-2 mr-sm-2 form-control " +
                    (errors.imageUrl && touched.imageUrl ? "is-invalid" : "")
                  }
                  type="text"
                  size="sm"
                  name="imageUrl"
                  placeholder="Paste url or upload picture below"
                />
                <ErrorMessage
                  name="imageUrl"
                  component="div"
                  className="invalid-feedback"
                />
              </Form.Group>
              <Form.Label size="sm"> Upload an Image </Form.Label>
              <input
                className="mb-2 mr-sm-2 form-control"
                type="file"
                name="image"
                accept="image/*"
                onChange={(event) =>{
                  setFieldValue("image", event.target.files[0]);
                }}
              />
              <br></br>
              <Button variant="primary" className="btn-custom icon-truck" type="submit" disabled={isSubmitting}>
                Submit Recipe
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default withRouter(FormComponent);
