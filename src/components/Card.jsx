import React from "react";
import IconBasket from "../assets/icons/basket.svg";
import IconLike from "../assets/icons/like.svg";

const Card = ({ product, addToCart, toggleFavorites }) => {
  return (
    <article className="card card--shop" key={product.id}>
      <header>
        <img
          className="card__image"
          src={product.imageUrl}
          alt={product.name}
        />
        <h3 className="card__title">
          {product.name} -
          {product.isFavorite ? "Favorilerde" : "Favorilerde değil"}
        </h3>
      </header>
      <div className="card__bottom">
        <img
          onClick={addToCart}
          className="card__bottom__icon"
          src={IconBasket}
          alt=""
        />
        <img
          onClick={toggleFavorites}
          className="card__bottom__icon--like"
          src={IconLike}
          alt=""
        />
        <span className="card__bottom__price">${product.price} </span>
      </div>
    </article>
  );
};

export default Card;
