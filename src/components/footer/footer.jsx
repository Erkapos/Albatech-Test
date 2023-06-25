import "./footer.css";
import albaLogo from "./images/alba-logo.svg";

function Footer() {
  return (
    <div className="footer-container">
      <div className="upper-footer">
        <div className="first-side">
          <img src={albaLogo} />
          <p>
            Albatech acts as a corporate partner to help digitize their business
            to accelerate trends in remote work.
          </p>
        </div>
        <div className="second-side">
          <h4>Website</h4>
          <p>Service</p>
          <p>About</p>
          <p>Portfolio</p>
          <p>Blog</p>
          <p>Career</p>
        </div>
        <div className="third-side">
          <h4>Contact</h4>
          <p>
            The Prominence Blok 38D No.25 Jl. Jalur Sutera Barat, Alam Sutera,
            Kota Tangerang, Banten 15143
          </p>
          <p>P : +62 81 1889 3383</p>
          <p>E : info@albatech.id</p>
        </div>
      </div>
      <div className="lower-footer">
        <p>©PT. Alba Digital Teknologi 2021 | All Rights Reserved</p>
        <p>Privacy policy | Terms of service</p>
      </div>
    </div>
  );
}

export default Footer;
