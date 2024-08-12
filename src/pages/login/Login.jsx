import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import "./Login.css";
import { authRemote } from "../../data/remote/auth/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../data/redux/tokenSlice/slice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleonclick = () => {
    navigate("/signup");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    const { email, password } = formData;
    const loginData = await authRemote.authenticate("login", {
      email,
      password,
    });
    console.log(loginData);
    if (!loginData) {
      alert("login failed try again!");
    } else {
      dispatch(setToken(loginData.token));
      localStorage.setItem("token", loginData.token);
      navigate("/home");
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="auth-switch">
          <Button
            onclick={handleonclick}
            type="button"
            className="signup-btn"
            ariaLabel="Sign Up"
          >
            Sign Up
          </Button>
          <Button type="button" className="login-btn" ariaLabel="Login">
            Login
          </Button>
        </div>

        <div className="login-header container">
          <div className="avatar-placeholder">
            <FontAwesomeIcon icon={faUser} size="2x" />
          </div>
          <h2>Welcome Back</h2>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="user@example.com"
            value={formData.email}
            onChange={handleChange}
            ariaLabel="Email"
            icon={faEnvelope}
          />
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="****"
            value={formData.password}
            onChange={handleChange}
            ariaLabel="Password"
            icon={faLock}
          />
          <Button
            type="submit"
            className="create-account-btn"
            ariaLabel="Login"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
