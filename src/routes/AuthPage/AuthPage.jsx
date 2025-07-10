import React, { useRef, useState } from "react";
import { useRegisterMutation, useLoginMutation } from "../../utils/fetchPins";
import "./AuthPage.css";
import { useNavigate } from "react-router";
import { loginRtk } from "../../utils/userSlice";
import { useDispatch } from "react-redux";
const AuthPage = () => {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [register, { isLoading: isLoadingRegister }] = useRegisterMutation();
  const [login, { isLoading: isLoadingLogin }] = useLoginMutation();
  const loginFrom = useRef();
  const registerFrom = useRef();
  const dispatch = useDispatch();

  async function submitRegister(e) {
    e.preventDefault();
    try {
      const formData = new FormData(registerFrom.current);
      const username = formData.get("username");
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");

      const res = await register({ username, name, email, password }).unwrap();
    } catch (error) {
      console.log(error);
    }
  }
  async function submitLogin(e) {
    e.preventDefault();
    try {
      const formData = new FormData(loginFrom.current);
      const password = formData.get("password");

      const email = formData.get("email");
      const res = await login({ email, password }).unwrap();

      dispatch(loginRtk(res));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="auth-page">
      <div className="auth-form">
        <img src="/general/logo.png" alt="" />
        <h3>{isRegister ? "Register account" : "Login to your account"}</h3>
        {isRegister ? (
          <form key="register" ref={registerFrom} onSubmit={submitRegister}>
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
          <form key="login" ref={loginFrom} onSubmit={submitLogin}>
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
