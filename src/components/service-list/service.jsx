import "./service.css";
import ServiceItem from "./service-item";
import website from "./images/Payment.svg";
import mobile from "./images/Mobile apps development.svg";
import digital from "./images/Digital product design.svg";
import maintenance from "./images/Maintenance.svg";
import cms from "./images/CMS development.svg";
import payment from "./images/Payment.svg";

function Service() {
  return (
    <div className="service-container">
      <p className="s-font title hidden">Complete Package</p>
      <h2 className="xl-font">
        From product design to software continuous delivery
      </h2>
      <div>
        <div className="service-grid">
          <ServiceItem
            image={website}
            title="Website Development"
            desc="High-performance website to reach out more your potential customers"
            class="chosen"
          />
          <ServiceItem
            image={mobile}
            title="Mobile apps development"
            desc="To accelerate your business process"
            class=""
          />
          <ServiceItem
            image={digital}
            title="Digital product design"
            desc="Complete digital product creations from UX prototyping to final UI designs"
            class=""
          />
          <ServiceItem
            image={maintenance}
            title="Maintenance"
            desc="Make sure your digital environment keep online and updated"
            class=""
          />
          <ServiceItem
            image={cms}
            title="CMS development"
            desc="You can update your website content yourself"
            class=""
          />
          <ServiceItem
            image={payment}
            title="Integrated payment gateway"
            desc="Simplify the payment system with just one step"
            class=""
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
