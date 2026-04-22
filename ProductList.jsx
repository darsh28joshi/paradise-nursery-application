import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";
import { Link } from "react-router-dom";

function ProductList() {
  const dispatch = useDispatch();

  const count = useSelector(state =>
    state.cart.items.reduce((a, b) => a + b.quantity, 0)
  );

  const products = [
    { id: 1, name: "Aloe Vera", price: 100, category: "Indoor" },
    { id: 2, name: "Snake Plant", price: 150, category: "Indoor" },
    { id: 3, name: "Rose", price: 120, category: "Outdoor" },
    { id: 4, name: "Tulsi", price: 80, category: "Medicinal" }
  ];

  return (
    <div>
      <h2>Products</h2>

      <Link to="/cart">Cart ({count})</Link>

      {products.map(item => (
        <div className="product-card" key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.category}</p>
          <p>₹{item.price}</p>

          <button onClick={() => dispatch(addToCart(item))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
