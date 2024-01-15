import React from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  return (
    <div>
      <div className="login-signUp">
        <div className="login-signUp-container">
          <h1>Sign Up</h1>
          <div className="login-signUp-field">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Password" />
          </div>
          <button>Continue</button>
          <p className="login-signUp-login">
            Already have a account?
            <span>Login</span>
          </p>
          <div className="login-signUp-agree">
            <input type="checkbox" name="" id="" />
            <div>
              <p>I agree to terms of use ...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
