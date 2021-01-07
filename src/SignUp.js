import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { signUserUp } from "./actions/userActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
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
    const { name, email, password, password_confirmation } = this.state;
    let user = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    };
    this.props.signUserUp(user);
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
    const { username, email, password, password_confirmation } = this.state;
    return (
      <div>
        <h2>Sign Up</h2>
        <Form onSubmit={(event) => this.handleSubmit(event)}>
          <Form.Row>
            <Col sm={4}>
            <Form.Group>
              <label>Name</label>
              <Form.Control
                type="text"
                className="mb-2 mr-sm-2"
                name="name"
                onChange={(event) => this.handleChange(event)}
                value={username}
              />
            </Form.Group>
            </Col>
          </Form.Row>
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
          <Form.Row>
          <Col sm={4}>
            <Form.Group>
              <Form.Label> Confirm Password </Form.Label>
              <Form.Control
                type="password"
                className="mb-2 mr-sm-2"
                name="password_confirmation"
                onChange={(event) => this.handleChange(event)}
                value={password_confirmation}
              />
            </Form.Group>
            </Col>
          </Form.Row>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
        <br></br>
        <div>
          Already have an account? <Link to="/signIn">Sign In</Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUserUp: (userInfo) => dispatch(signUserUp(userInfo)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Signup));
