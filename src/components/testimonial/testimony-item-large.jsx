import "./testimonial.css";
import profile from "./images/Ellipse 49.svg";

function TestimonyItemLarge(props) {
  return (
    <div className="testimonial-item">
      <h3 className="xl-font">{props.title}</h3>
      <h4 className="l-font">{props.quote}</h4>
      <div className="profile">
        <img src={profile} />
        <div>
          <p>Matthijs Piëst</p>
          <p className="testimonial-job">COO at WieBetaaltWat</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonyItemLarge;
