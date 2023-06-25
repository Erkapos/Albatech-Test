import "./reusable-button.css";

function ReusableButton(props) {
  return props.isFilled ? (
    <button
      onClick={props.onClick}
      className={"reusable-button " + props.additionalClass}
    >
      {props.title}
    </button>
  ) : (
    <button className={"reusable-button-unfilled " + props.additionalClass}>
      {props.title}
    </button>
  );
}

export default ReusableButton;
