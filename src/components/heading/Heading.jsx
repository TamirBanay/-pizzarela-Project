import "./Heading.css";
import logo from "./logo.png";
import shoppingicon from "./shoppingicon.png";
function Heading() {
  return (
    <div>
      <nav className="nav">
        <a href="/home">
          <img className="logo" src={logo} />
        </a>
        <ul>
          <li>
            <a href="/Contact">צור קשר</a>
          </li>

          <li>
            <a href="/About">עלינו</a>
          </li>
          <li>
            <a href="/Order">הזמנה </a>
          </li>
          <li>
            <a href="/Menu">תפריט</a>
          </li>
        </ul>
      </nav>
      <div className="icon-shopping">
        <a href="/Cart">
          <img className="cart-img" src={shoppingicon} />
        </a>
      </div>
    </div>
  );
}

export default Heading;
