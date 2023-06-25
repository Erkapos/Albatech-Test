import "./collaboration.css";

function Header() {
  return (
    <div className="collaboration-container">
      <h2 className="collaboration-title l-font">
        Our Progress Comes with a Collaboration Between
        <br /> Creativity, Ideas, and Technology
      </h2>
      <div>
        <div className="collaboration-content">
          <h3 className="xl-font">1000+</h3>
          <h4 className="m-font">Designs</h4>
        </div>
        <div className="collaboration-content">
          <h3 className="xl-font">30+</h3>
          <h4 className="m-font">Products</h4>
        </div>
        <div className="collaboration-content">
          <h3 className="xl-font">58+</h3>
          <h4 className="m-font">Website Developments</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
