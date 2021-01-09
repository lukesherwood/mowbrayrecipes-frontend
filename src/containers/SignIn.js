import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { fetchUser } from "../actions/userActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: "",
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
    const { email, password } = this.state;
    let user = {
      email: email,
      password: password,
    };
    this.props.fetchUser(user);
    this.props.history.push("/");
  };

  handleErrors = () => {
    return (
      <div>
        <ul>
          {this.state.errors.map((error) => {
            return <li key={error}>{error}</li>;
          })}
        </ul>
      </div>
    );
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h2>Sign In</h2>
        <Form onSubmit={(event) => this.handleSubmit(event)}>
          <Form.Row>
            <Col sm={4}>
            <Form.Group>
              <Form.Label> Email </Form.Label>
              <Form.Control
                type="email"
                className="mb-2 mr-sm-2"
                name="email"
                onChange={(event) => this.handleChange(event)}
                value={email}
              />
            </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm={4}>
            <Form.Group>
              <Form.Label> Password </Form.Label>
              <Form.Control
                type="password"
                className="mb-2 mr-sm-2"
                name="password"
                onChange={(event) => this.handleChange(event)}
                value={password}
              />
            </Form.Group>
            </Col>
          </Form.Row>
          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </Form>
        <br></br>
        <div>
          Don't have an account? <Link to="/signUp">Register</Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userInfo) => dispatch(fetchUser(userInfo)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
