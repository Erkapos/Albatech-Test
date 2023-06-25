import "./profilePage.css";
import Navbar from "../components/navbar/navbar";
import { useNavigate } from "react-router-dom";
import picture from "./images/blank-profile.png";
import ReusableButton from "../components/reusable-button/reusable-button";

function Profile() {
  const navigate = useNavigate();

  return localStorage.getItem("token") != null ? (
    <div>
      <Navbar />

      <div className="profile-container">
        <img src={picture} />
        <div>
          <h4 className="l-font">Peter Iskandar</h4>
          <h5>Tangerang, Indonesia</h5>
          <h5>089628626810</h5>
          <a href="https://erkapos.github.io/Portfolio">
            erkapos.github.io/Portfolio
          </a>
          <div>
            <p>token id : {localStorage.getItem("token")}</p>

            <ReusableButton
              title="Log out"
              isFilled={true}
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>LOG IN FIRST</div>
  );
}

export default Profile;
