import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div>
      <div id="checkout-container">
        <header>
          <h1 id="grr">Eco-Friendly Bio Products</h1>
          <p>Your sustainable choice for better living.</p>
        </header>

        <div id="checkout-form">
          <h2 id="grr">Complete Your Order</h2>
          <form
            id="checkout-form"
            method="POST"
          />

          <div id="form-section">
            <label for="full-name">Full Name:</label>
            <input type="text" id="full-name" name="full-name" required="" />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required="" />

            <label for="address">Shipping Address:</label>
            <textarea id="address" name="address" required=""></textarea>
          </div>

          <div id="summary">
            <h3>Order Summary</h3>
            <div class="item">
              <p>Bio Organic Shampoo</p>
              <span>$15.99</span>
            </div>
            <div id="item">
              <p>Eco-Friendly Soap</p>
              <span>$7.99</span>
            </div>
            <div id="total">
              <p>Total</p>
              <span id="total-price">$23.98</span>
            </div>
          </div>

          <div id="form-footer">
            <button type="submit" id="submit-button">
              Place Order
            </button>
          </div>
          <form />
          <div />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
