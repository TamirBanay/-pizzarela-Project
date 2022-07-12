import "./Order.css";
import Product from "../components/Product/Product";
import margarita from "./order-images/margarita.jpg";
import garlic from "./order-images/garlic.jpg";
import balagan from "./order-images/balagan.jpg";
import newyork from "./order-images/new-york.jpg";
import margarita2 from "./order-images/margarita2.jpg";
import kremburle from "./order-images/kremburle.jpg";
import fadj from "./order-images/fadj.jpg";
import newyorkcake from "./order-images/newyorkcake.jpg";
import fererofistuk from "./order-images/fererofistuk.jpg";

export default function Order() {
  return (
    <div className="all-orders">
      <div className="title">
        <h1>ספיישלים</h1>
      </div>

      <div className="orders" id="Pizzas">
        <Product
          className="pizza-img"
          name="מרגריטה"
          price='50 ש"ח'
          img={margarita}
        />
        <Product
          className="pizza-img"
          name="מרגריטה משופרת"
          price='50 ש"ח'
          img={margarita2}
        />
        <Product
          className="pizza-img"
          name="פטריות שום בצל"
          price='60 ש"ח'
          img={garlic}
        />
        <Product
          className="pizza-img"
          name="פיצה בלאגן"
          price='60 ש"ח'
          img={balagan}
        />
        <Product
          className="pizza-img"
          name="פיצה ניו יורק"
          price='60 ש"ח'
          img={newyork}
        />
      </div>
      <div className="title">
        <h1 className="title-orders">קינוחים</h1>
      </div>
      <div className="orders" id="desserts">
        <Product
          className="dessert-img"
          name="קרם בורלה "
          price='40 ש"ח'
          img={kremburle}
        />
        <Product
          className="dessert-img"
          name="פאדג' שוקולד"
          price='40 ש"ח'
          img={fadj}
        />
        <Product
          className="dessert-img"
          name="עוגת ניו-יורק"
          price='40 ש"ח'
          img={newyorkcake}
        />
        <Product
          className="dessert-img"
          name="פררו פיסטוק-(צמחוני)"
          price='40 ש"ח'
          img={fererofistuk}
        />
      </div>

    </div>
  );
}
