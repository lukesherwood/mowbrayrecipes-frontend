import React, { Component } from "react";
import { connect } from "react-redux";
import { addCommentToRecipe } from "../actions/recipeActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  content: Yup.string()
    .required("*Content is required"),
});
class CreateCommentForm extends Component {
  render() {
    return (
      <div className="comment-card">
        <br></br>
        <h3>New Comment</h3>
        <Formik
          initialValues={{ content: "", rating: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            const { content, rating } = values;
            let comment = {
              content,
              rating,
              user_id: this.props.currentUser.id,
              recipe_id: this.props.recipe.id,
            };
            this.props.addCommentToRecipe(comment);
            setSubmitting(false);
            resetForm()
            // document.getElementById("toggle-new-list-form")
            //   ? document.getElementById("toggle-new-list-form").click()
            //   : resetForm();
          }}
        >
          {({ touched, errors, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label size="sm">Content</Form.Label>
                <Field
                  className={
                    "form-control " +
                    (errors.content && touched.content ? "is-invalid" : "")
                  }
                  size="sm"
                  as="textarea"
                  name="content"
                  />
                <ErrorMessage
                  name="content"
                  component="div"
                  className="text-danger"
                  />
              </Form.Group>
              <Form.Group>
                <Form.Label size="sm">Rating</Form.Label>
                <Field
                  as="select"
                  className={
                    "form-control " +
                    (errors.rating && touched.rating
                      ? "is-invalid"
                      : "")
                  }
                  size="sm"
                  name="rating"
                >
                  <option defaultValue>Choose Rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Field>
                <ErrorMessage
                  name="rating"
                  component="div"
                  className="text-danger"
                />
              </Form.Group>
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                Create Comment
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCommentToRecipe: (comment) => dispatch(addCommentToRecipe(comment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCommentForm);
