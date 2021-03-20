import React, { Component } from "react";
import { connect } from "react-redux";
// import { searchHikes } from '../actions/hikeActions'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { Formik, Field } from "formik";
import Fuse from "fuse.js";
// import * as Yup from "yup";
import ModalRecipes from "../components/ModalRecipes";
class SearchRecipesForm extends Component {
  constructor(props) {
    super(props);
    this.state = { modalShow: false, results: [], keyword: "" };
  }

  fuseSearch = (keyword) => {
    const recipes = this.props.recipes;
    const fuse = new Fuse(recipes, {
      threshold: 0.1,
      keys: ["attributes.name"],
    });
    const matches = fuse.search(keyword);
    return matches.map(({ item }) => {
      return item;
    });
  };

  render() {
    return (
      // need to make this div width-100
      <Nav>
        <ModalRecipes
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
          keyword={this.state.keyword}
          recipes={this.state.results}
        />
        <Formik
          initialValues={{ keyword: "" }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            this.setState({ keyword: values });
            const results = this.fuseSearch(this.state.keyword.keyword);
            this.setState({ results });
            setSubmitting(false);
            this.setState({ modalShow: true });
            resetForm();
          }}
        >
          {({ touched, errors, handleSubmit, isSubmitting }) => (
            <Form className="row vertical-center" onSubmit={handleSubmit}>
              <Form.Group className="col-9 pr-0 col-md-8">
                <Field
                  type="search"
                  placeholder="Search for recipes"
                  className={
                    "form-control " +
                    (errors.keyword && touched.keyword ? "is-invalid" : "")
                  }
                  size="sm"
                  name="keyword"
                />
              </Form.Group>
              <Form.Group className="col-1 pl-0 pr-0">
                <Button
                  variant="outline-primary"
                  className="d-flex"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Search
                </Button>
              </Form.Group>
            </Form>
          )}
        </Formik>
      </Nav>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes, // change this to be the received hikes from server
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     searchHikes: (keyword) => dispatch(searchHikes(keyword)),
//   };
// };

export default connect(mapStateToProps, null)(SearchRecipesForm);
