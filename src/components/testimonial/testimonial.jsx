import "./testimonial.css";
import background from "./images/Group 82.png";
import profile from "./images/Ellipse 49.svg";
import TestimonyItemSmall from "./testimony-item-small";

import TestimonyItem from "./testimony-item-large";

function Testimonial() {
  return (
    <div className="testimonial-container">
      <p className="title hidden">Testimonial</p>
      <div className="testimonial-content">
        <h2 className="l-font">
          What clients love in working <br /> with Albatech Team
        </h2>
        <div className="testimonial-grid">
          <TestimonyItem
            title="Amazing people"
            quote='"They are people who are not only following the tasks, but can work as a team. Together."'
          />
          <TestimonyItemSmall />
          <div className="testimonial-flex">
            <TestimonyItemSmall />
            <TestimonyItemSmall />
          </div>
          <TestimonyItem
            title="Partnership approach"
            quote="“We felt like we had a true partner throughout the process. They were clearly interested on our long-term success.”"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
