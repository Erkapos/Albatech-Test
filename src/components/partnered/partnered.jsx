import "./partnered.css";
import hippo from "./images/hippo.png";
import home from "./images/home.png";
import ilios from "./images/ilios.png";
import dio from "./images/dio.png";
import melandas from "./images/melandas.png";

function Partnered() {
  return (
    <div className="partnered-container">
      <div className="partnered-grid">
        <img src={hippo} />
        <img src={home} />
        <img src={ilios} />
        <img src={dio} />
        <img src={melandas} />
      </div>
      <div className="dot-container">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}

export default Partnered;
