import React, { useState } from "react";
import "./AuthPage.css";
const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div className="auth-page">
      <div className="auth-form">
        <img src="/general/logo.png" alt="" />
        <h3>{isRegister ? "Register account" : "Login to your account"}</h3>
        {isRegister ? (
          <form key="register">
            <div className="auth-form-item">
              <label htmlFor="username">Username</label>
              <input
                type="username"
                name="username"
                id="username"
                placeholder="Username"
              />
            </div>
            <div className="auth-form-item">
              <label htmlFor="name">Name</label>
              <input type="name" name="name" id="name" placeholder="Name" />
            </div>
            <div className="auth-form-item">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="auth-form-item">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
              />
            </div>
            <button type="Submit">Register</button>
            <span onClick={() => setIsRegister(false)}>
              Don you have an account? <b>Login</b>
            </span>
          </form>
        ) : (
          <form key="login">
            <div className="auth-form-item">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="auth-form-item">
              <label htmlFor="password">password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <button type="Submit">Login</button>
            <span onClick={() => setIsRegister(true)}>
              Don't you have an account? <b>Register</b>
            </span>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
