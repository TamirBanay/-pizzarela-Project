import "./Product.css";

function Product(props) {
  return (
    <div className="product-container">
      <div className="img-container">
        <img className="product-img" src={props.img} />
      </div>
      <div className="text-container">{props.name}</div>
      <div className="price-container">{props.price}</div>

      <div className="button-container">
        <button className="button-add" type="button">
          הוספה להזמנה
        </button>
      </div>
    </div>
  );
}

export default Product;
