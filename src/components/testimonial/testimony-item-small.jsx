import "./testimonial.css";
import profile from "./images/Ellipse 49.svg";

function TestimonyItemSmall() {
  return (
    <div className="testimonial-item testimonial-small">
      <h3>Amazing People</h3>
      <h4 className="s-font">
        "They are people who are not only following the tasks, but can work as a
        team. Together."
      </h4>
      <div className="profile">
        <div>
          <p className="s-font">Matthijs Piëst</p>
          <p className="s-font testimonial-job">COO at WieBetaaltWat</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonyItemSmall;
