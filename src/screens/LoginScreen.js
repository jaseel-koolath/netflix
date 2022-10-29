import React, { useState } from "react";
import SignInScreen from "./SignInScreen";
import "./LoginScreen.css";

function LoginScreen() {
  const [sign, setSign] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginscreen__background">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png?20170904093427"
          alt="netflix-logo"
          className="loginscreen__logo"
        />
        <button className="loginscreen__signIn" onClick={() => setSign(true)}>
          Sign in
        </button>
      </div>
      <div className="loginscreen__gradient" />
      <div className="loginscreen__body">
        {sign ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginscreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="loginscreen__getstarted"
                  onClick={() => setSign(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
