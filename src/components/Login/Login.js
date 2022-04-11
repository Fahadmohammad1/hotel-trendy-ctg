import React from "react";
import { Button, Form } from "react-bootstrap";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase.init";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-75 mx-auto mt-4">
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="outline-dark" type="submit" className="w-100">
            Login
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
      <button
        onClick={handleGoogleLogin}
        className="w-100 btn-outline-warning text-dark"
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
