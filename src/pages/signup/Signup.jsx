import React, { useState } from "react";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import "./Signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { authRemote } from "../../data/remote/auth/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
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
    navigate("/login");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const { name, email, password } = formData;
    const signupData = await authRemote.authenticate("signup", {
      name,
      email,
      password,
    });
    console.log(signupData);
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="auth-switch">
          <Button type="button" className="login-btn" ariaLabel="Sign Up">
            Sign Up
          </Button>
          <Button
            onclick={handleonclick}
            type="button"
            className="signup-button"
            ariaLabel="Login"
          >
            Login
          </Button>
        </div>

        <div className="signup-header container ">
          <div className="avatar-placeholder">
            <FontAwesomeIcon icon={faUser} size="2x" />
          </div>
          <div>
            <h2>Create User Account</h2>
            <p>Welcome to Data Bar. Start your free 7-day Trial.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            id="username"
            name="username"
            placeholder="Create a username"
            value={formData.username}
            onChange={handleChange}
            ariaLabel="Username"
            icon={faUser}
          />
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            ariaLabel="Email"
            icon={faEnvelope}
          />
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Minimum of 8 characters"
            value={formData.password}
            onChange={handleChange}
            ariaLabel="Password"
            icon={faLock}
          />
          <Button
            type="submit"
            className="create-account-btn"
            ariaLabel="Create account"
          >
            Create account
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
