import "./portfolio.css";
import PortfolioItem from "./portfolio-item";
import ilios from "./images/ilios.png";
import home from "./images/home.png";
import hippo from "./images/hippo.png";
import ReusableButton from "../reusable-button/reusable-button";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <p className="title hidden">Portfolio</p>
      <h2 className="l-font">
        The software that we build <br />
        takes our clients to the next levely
      </h2>
      <div>
        <div className="portfolio-grid">
          <PortfolioItem
            image={ilios}
            category="Mobile apps"
            title="ILIOS app (B2B E-commerce)"
            desc="Has a unique selling point where not all companies offer applications for sales, data collection and management."
          />
          <PortfolioItem
            image={home}
            category="Website development"
            title="Home and Living"
            desc="Albatech helps in creating a website catalog to show brand identity and information in accordance with vision and mission of Home and Living."
          />
          <PortfolioItem
            image={hippo}
            category="Website development"
            title="HIPPO"
            desc="Albatech help to create e-commerce and company profile for Hippo’s Website with realtime transaction and integration with Payment Gateway to accept multi payment."
          />
        </div>
      </div>

      <ReusableButton title="Learn More" isFilled={true} />
    </div>
  );
}

export default Portfolio;
