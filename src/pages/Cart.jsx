import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    updateCartItemQuantity,
    removeCartItem,
    removeItemFromCart,
    addToCart,
    lessQuantityToCart,
  } = useContext(CartContext);

  // Calculate total price
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
      <div className="cart__header row ">
        <div className="col-md-8 cart">
          <h2>Shopping Cart</h2>
          <div className="text-right text-muted">{cartItems.length} items</div>
          <hr />

          {cartItems.map((item, index) => (
            <div className="cart-item row" key={index}>
              <div className="col-2">
                <img
                  className="img-fluid"
                  src={item.thumbnail}
                  alt={item.title}
                />
              </div>
              <div className="col">
                <div>{item.title}</div>
                <div className="text-muted">{item.category}</div>
              </div>
              <div className="col">
                {/* Quantity Management */}
                <button
                  disabled={item.quantity == 1}
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
              <div className="col">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <div className="col text-right">
                <button
                  onClick={() => removeItemFromCart(item.id)}
                  className="btn btn-danger"
                >
                  ×
                </button>
              </div>
              <hr />
            </div>
          ))}
          <div className="back-to-shop">
            <Link to={"/products"}>
              <span className="back-to-shop">← Back to Shop</span>
            </Link>
          </div>
        </div>

        {/* Summary Section */}
        <div className="col-md-4 summary">
          <h5>
            <b>Summary</b>
          </h5>
          <hr />
          <div className="row">
            <div className="col">ITEMS QUANTITY {itemsQuantity}</div>
            {/* <div className="col text-right">${Math.round(itemsPrice)}</div> */}
          </div>

          <hr />
          <div className="row">
            <div className="col">TOTAL PRICE</div>
            <div className="col text-right">${Math.round(itemsPrice)}</div>
          </div>
          <button className="btn btn-primary btn-block">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
