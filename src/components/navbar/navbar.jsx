import "./navbar.css";
import albaLogo from "./images/alba-logo.svg";
import ReusableButton from "../reusable-button/reusable-button";
import { useNavigate } from "react-router-dom";
import hamburger from "./images/hamburger-icon.svg";

function Navbar() {
  const navigate = useNavigate();

  function toggleMenu() {
    var navbarButtons = document.querySelector(".navbar-menu-list");
    navbarButtons.classList.toggle("hidden");
  }

  return (
    <div className="navbar-container">
      <img
        onClick={() => {
          navigate("/");
        }}
        src={albaLogo}
      />

      <div class="navbar-buttons reverse-hidden">
        <ul class="navbar-menu-list hidden">
          <li>
            <a className="m-font" href="#">
              Service
            </a>
          </li>
          <li>
            <a className="m-font" href="#">
              About
            </a>
          </li>
          <li>
            <a className="m-font" href="#">
              Portfolio
            </a>
          </li>
          <li>
            <a className="m-font" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="m-font" href="#">
              Career
            </a>
          </li>
        </ul>
      </div>

      <ReusableButton
        additionalClass="hidden"
        title="Contact Us"
        isFilled={true}
      />

      <img
        onClickCapture={toggleMenu}
        class="reverse-hidden"
        id="hamburger-button"
        src={hamburger}
        alt="hamburger-icon"
      />
    </div>
  );
}

export default Navbar;
