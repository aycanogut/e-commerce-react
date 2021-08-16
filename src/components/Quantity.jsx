import React from "react";
import IconPlus from "../assets/icons/plus.svg";
import IconMinus from "../assets/icons/minus.svg";
import { useDispatch } from "react-redux";
import {
  addToCartAction,
  removeFromCartAction,
} from "../redux/actions/cartActions";

const Quantity = ({ quantity, cartItem }) => {
  const dispatch = useDispatch();

  const addToCart = (cartItem) => {
    dispatch(addToCartAction(cartItem));
  };

  const removeFromCart = (cartItem) => {
    dispatch(removeFromCartAction(cartItem));
  };

  return (
    <div className="quantity">
      <button
        onClick={() => addToCart(cartItem)}
        className="quantity__btn"
        type="button"
        name="button"
      >
        <img src={IconPlus} alt="icon plus" />
      </button>
      <input type="text" name="name" value={quantity} readOnly />
      <button
        onClick={() => removeFromCart(cartItem)}
        className="quantity__btn"
        type="button"
        name="button"
      >
        <img src={IconMinus} alt="icon minus" />
      </button>
    </div>
  );
};

export default Quantity;
