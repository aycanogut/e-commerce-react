import React from "react";
import IconPlus from "../assets/icons/plus.svg";
import IconMinus from "../assets/icons/minus.svg";

const Quantity = ({quantity}) => {

    return (
      <div className="quantity">
        <button className="quantity__btn" type="button" name="button">
          <img src={IconPlus} alt="" />
        </button>
        <input type="text" name="name" value={quantity}></input>
        <button className="quantity__btn" type="button" name="button">
          <img src={IconMinus} alt="" />
        </button>
      </div>
    );

};

export default Quantity;

