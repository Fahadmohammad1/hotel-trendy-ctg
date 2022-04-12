import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import auth from "../../firebase.init";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePassBlur = (e) => {
    setPassword(e.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <>
      <div className="w-75 mx-auto mt-4">
        <div>
          <Form onSubmit={formSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onBlur={handleEmailBlur}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onBlur={handlePassBlur}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="outline-dark" type="submit" className="w-100">
              Register
            </Button>
          </Form>
        </div>
        <div className="d-flex mt-3">
          <h6 className="w-50 mx-3">
            <hr />
          </h6>
          <p>or</p>
          <h6 className="w-50 mx-3">
            <hr />
          </h6>
        </div>
      </div>
    </>
  );
};

export default Register;
