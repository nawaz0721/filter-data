import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, addToCart, lessQuantityToCart, removeItemFromCart } =
    useContext(CartContext);

  // Calculate total price and quantity
  const itemsPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const itemsQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart">
      <div className="cart__header">
        <div>
          <h2>Shopping Cart</h2>
          <div className="text-muted">{cartItems.length} items</div>
        </div>
        <div className="back-to-shop">
          <Link to="/products">← Back to Shop</Link>
        </div>
      </div>

      {cartItems.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src={item.thumbnail} alt={item.title} />
          <div className="cart-item-details">
            <div>{item.title}</div>
            <div className="text-muted">{item.category}</div>
          </div>
          <div className="cart-item-quantity">
            <button
              disabled={item.quantity === 1}
              onClick={() => lessQuantityToCart(item.id)}
            >
              -
            </button>
            <input
              type="number"
              value={item.quantity}
              readOnly
              className="quantity-input"
            />
            <button onClick={() => addToCart(item)}>+</button>
          </div>
          <div className="cart-item-price">
            ${(item.price * item.quantity).toFixed(2)}
          </div>
          <button
            className="btn btn-danger"
            onClick={() => removeItemFromCart(item.id)}
          >
            ×
          </button>
        </div>
      ))}

      <div className="summary">
        <h5>Summary</h5>
        <div>ITEMS QUANTITY: {itemsQuantity}</div>
        <div>TOTAL PRICE: ${itemsPrice.toFixed(2)}</div>
        <button className="btn btn-primary btn-block">CHECKOUT</button>
      </div>
    </div>
  );
}

export default Cart;
