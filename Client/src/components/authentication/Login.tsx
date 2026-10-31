import { useState, type ChangeEvent, type FormEvent } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./login.css";

const Login = () => {
  // State to show or hide the password
  const [showPassword, setShowPassword] = useState(false);

  // State to store email and password
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // One function handles both inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Login Data:", formData);
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* Heading */}
        <div className="login-header">
          <h1>Welcome Back!</h1>
          <p>Login to continue chatting with your friends</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">

          {/* Email */}
          <div className="login-form-group">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="login-form-group">
            <label>Password</label>

            <div className="login-password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="login-eye-button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button type="submit" className="login-button">
            Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;

