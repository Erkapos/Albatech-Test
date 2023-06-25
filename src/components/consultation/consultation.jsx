import "./consultation.css";
import ReusableButton from "../reusable-button/reusable-button";

function Consultation() {
  return (
    <div className="consultation-container">
      <h4>Is software important for your business?</h4>
      <h3 className="xl-font">Build it with Albatech</h3>

      <ReusableButton title="Consultation Now" isFilled={false} />
    </div>
  );
}

export default Consultation;
