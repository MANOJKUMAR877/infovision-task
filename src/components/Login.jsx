import React, { Component } from "react";
import { Button, Form,Alert } from "react-bootstrap";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  valueChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  submit = () => {
    let { username, password } = this.state;
    username === password
      ? this.props.history.push("/tablePage")
      :  alert('Incorrect username or password')
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.submit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control
              onChange={this.valueChange}
              type="text"
              placeholder="Enter username"
              name="username"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={this.valueChange}
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
