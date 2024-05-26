import React, { useContext } from "react";
import { CartContext } from "../context/cart.context";
import { ProtectedRoute } from "../ProtectedRoute";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useContext(CartContext);

  const { pathname } = useLocation();

  const totalCartValue = cartItems.reduce((totalValue, cartItem) => {
    return totalValue + cartItem.item.discountedPrice * cartItem.quantity;
  }, 0);

  const RemoveHandler = (productToRemove) => {
    removeFromCart(productToRemove);
  };

  const IncreaseCartHandler = (increaseProduct) => {
    increaseCartQuantity(increaseProduct);
  };

  const DecreaseCartHandler = (decreaseProduct) => {
    decreaseCartQuantity(decreaseProduct);
  };

  return (
    <div>
      <ProtectedRoute path={pathname} />
      {cartItems.map(({ item, quantity, imgUrl }) => {
        return (
          <div key={item.id}>
            <p className="cartcontent">
              <img
                className="cartimg"
                src={item.imgUrl}
                alt={item.productName}
              />

              <div className="texter">
                <p className="product">{item.productName}</p>

                <p className="currency">
                  {item.currency}
                  {item.discountedPrice}
                </p>

                <p className="quantity">
                  {"Qty:"} {quantity}
                  <button
                    className="incbtn"
                    onClick={() => IncreaseCartHandler(item)}
                  >
                    +
                  </button>
                  <button
                    className="decbtn"
                    onClick={() => DecreaseCartHandler(item)}
                  >
                    -
                  </button>
                </p>

                <p>
                  <button
                    className="removebtn"
                    onClick={() => RemoveHandler(item)}
                  >
                    Remove
                  </button>
                  <NavLink to="/checkout">
                    <button className="buynowbtn">BuyNow</button>
                  </NavLink>
                </p>
              </div>
            </p>
          </div>
        );
      })}
      <div className="cart-total-container">
        {/* Container for cart total section */}

        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-subtotal">
            <span>Sub Total ({cartItems.length} items):</span>
            <span>{totalCartValue}</span>
          </div>
          <div className="cart-checkout-btn">
            <NavLink to="/checkout">
              <button className="checkoutbtn">Proceed to Checkout</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
