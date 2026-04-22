import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeItem
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart.items);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <p>Qty: {item.quantity}</p>

          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>

          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <button>Checkout</button>
    </div>
  );
}

export default CartItem;
