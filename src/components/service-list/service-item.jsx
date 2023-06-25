import "./service.css";

function ServiceItem(props) {
  function setChosen(event) {
    var items = document.querySelectorAll(".service-item");

    items.forEach((each) => {
      each.classList.remove("chosen");
    });
    event.currentTarget.classList.add("chosen");
  }

  return (
    <div className={"service-item " + props.class} onClick={setChosen}>
      <img src={props.image} />
      <h4 className="m-font">{props.title}</h4>
      <p>{props.desc}</p>
    </div>
  );
}

export default ServiceItem;
