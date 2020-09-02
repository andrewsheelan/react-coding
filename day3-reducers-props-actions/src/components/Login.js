import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { loginStarted } from "../actions/login";

function Login({ loginStarted }) {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const setLogin = (e) => {
    e.preventDefault();
    loginStarted(emailRef.current.value, passwordRef.current.value);
  };
  return (
    <Container>
      <Form onSubmit={setLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  loginStarted,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
