import "./portfolio.css";

function PortfolioItem(props) {
  return (
    <div className="portfolio-item">
      <img src={props.image} />
      <div>
        <p className="s-font portfolio-category">{props.category}</p>
        <h4 className="m-font">{props.title}</h4>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default PortfolioItem;
