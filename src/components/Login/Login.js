import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import auth from "../../firebase.init";
import facebookLogo from "../../images/Facebook.png";
import googleLogo from "../../images/Google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePassBlur = (e) => {
    setPassword(e.target.value);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  const LoginFormSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  console.log(user);
  return (
    <div className="w-75 mx-auto mt-4">
      <div>
        <Form onSubmit={LoginFormSubmit}>
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
      <div className="d-flex justify-content-center">
        <button
          onClick={() => {
            signInWithGoogle();
          }}
          className="fw-bold btn btn-outline-warning text-dark mx-3"
        >
          <img src={googleLogo} alt="" />
          Login with Google
        </button>
        <button
          // onClick={handleFacebookLogin}
          className="fw-bold btn btn-outline-warning text-dark mx-2"
        >
          <img src={facebookLogo} alt="" />
          Login with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
