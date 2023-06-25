import "./header.css";
import headerImage from "./images/Group 81.png";
import line from "./images/Vector 2 (Stroke).svg";
import { Link } from "react-router-dom";
import ReusableButton from "../reusable-button/reusable-button";

function Header() {
  return (
    <div className="header-container">
      <div>
        <h1 className="xxl-font">
          Build or scale up <br />
          <span className="xxl-font">Your development team</span>
        </h1>
        <div>
          <img src={line} />
          <p className="l-font">in weeks, not months</p>
        </div>

        <ReusableButton title="Book now" isFilled={true} />
        <Link to="login">Log in</Link>
      </div>
      <img src={headerImage} />
    </div>
  );
}

export default Header;
