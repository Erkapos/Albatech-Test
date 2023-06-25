import "./reusable-button.css";

function ReusableButton(props) {
  return props.isFilled ? (
    <button onClick={props.onClick} className="reusable-button">{props.title}</button>
  ) : (
    <button className="reusable-button-unfilled">{props.title}</button>
  );
}

export default ReusableButton;
