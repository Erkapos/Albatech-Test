import "./loginPage.css";
import Navbar from "../components/navbar/navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReusableButton from "../components/reusable-button/reusable-button";
import {connect} from "../connect"

function Login() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    
    connect(emailValue, passwordValue, navigate)
  };

  return (
    <div className="login-page-container">
      <Navbar />

      <div className="form-container">
        <form autoComplete="off" onSubmit={handleLogin}>
          <h3 className="l-font">Login Form</h3>
          <div>
            <label>Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address.."
              onChange={(event) => {
                setEmailValue(event.target.value);
              }}
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password.."
              onChange={(event) => {
                setPasswordValue(event.target.value);
              }}
              required
            />
          </div>

          <ReusableButton title="Log in" isFilled={true} />
        </form>
      </div>
    </div>
  );
}

export default Login;
