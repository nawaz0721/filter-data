import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    const arr = cartItems;
    // Add item to cart
    const itemIndex = cartItems.findIndex((data) => data.id == item.id);
    if (itemIndex == -1) {
      arr.push({ ...item, quantity: 1 });
    } else {
      arr[itemIndex].quantity++;
    }
    setCartItems([...arr]);
  }

  function lessQuantityToCart(id) {
    const arr = cartItems;
    const itemIndex = cartItems.findIndex((data) => data.id == id);
    arr[itemIndex].quantity--;
    setCartItems([...arr]);
  }

  function removeItemFromCart(id) {
    const arr = cartItems;
    const itemIndex = cartItems.findIndex((data) => data.id == id);
    arr.splice(itemIndex, 1);
    setCartItems([...arr]);
  }

  function isItemAdded(id) {
    const arr = cartItems;
    const itemIndex = cartItems.findIndex((data) => data.id == id);
    if (itemIndex == -1) {
      return null;
    } else {
      return arr[itemIndex];
    }
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeItemFromCart,
        isItemAdded,
        lessQuantityToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
