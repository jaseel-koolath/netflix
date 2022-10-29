import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignInScreen.css";

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="SignInScreen">
      <form action="">
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email ID" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signIn_grey">New to Netflix? </span>
          <span className="signIn_link" onClick={register}>
            Sign Up Now!
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
