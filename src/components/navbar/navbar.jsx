import "./navbar.css";
import albaLogo from "./images/alba-logo.svg";
import ReusableButton from "../reusable-button/reusable-button";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      <img
        onClick={() => {
          navigate("/");
        }}
        src={albaLogo}
      />
      <p className="navbar-item hidden">Service</p>
      <p className="navbar-item hidden">About</p>
      <p className="navbar-item hidden">Portfolio</p>
      <p className="navbar-item hidden">Blog</p>
      <p className="navbar-item hidden">Career</p>
      <ReusableButton title="Contact Us" isFilled={true} />
    </div>
  );
}

export default Navbar;
