import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartAction,
  removeFromCartAction,
  totalPriceAction,
} from "../redux/actions/cartActions";
import Card from "./Card";
import Checkout from "./Checkout";
import Layout from "./Layout";
import Title from "./Title";
import IconRemove from "../assets/icons/basket-remove.svg";
import IconLike from "../assets/icons/like.svg";
import IconDislike from "../assets/icons/dislike.svg";

const Payment = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPriceOfCart = () => dispatch(totalPriceAction());
  const { totalPrice } = useSelector((state) => state.cart);
  const removeFromCart = (product) => dispatch(removeFromCartAction(product));

  useEffect(() => {
    totalPriceOfCart();
  }, [cart]);

  return (
    <Layout>
      <Title title="Payment" />
      <main>
        <section className="payment">
          <h1 className="payment__title">Shopping Bag</h1>
          <div className="payment__container">
            <section className="payment__products">
              <h2 className="payment__title">Added Items</h2>
              <div className="payment__products__container">
                {cart.map((cartItem) => (
                  <article className="card card--shop" key={cartItem.id}>
                    <header>
                      <img
                        className="card__image"
                        src={cartItem.imageUrl}
                        alt={cartItem.name}
                      />
                      <h3 className="card__title">{cartItem.name}</h3>
                    </header>
                    <div className="card__bottom">
                      <img
                        onClick={() => removeFromCart(cartItem)}
                        className="card__bottom__icon"
                        src={IconRemove}
                        alt=""
                      />
                      <img
                        className="card__bottom__icon--like"
                        src={cartItem.isFavorite ? IconDislike : IconLike}
                        alt=""
                      />
                      <span className="card__bottom__price">
                        ${cartItem.price}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
            <aside className="payment__payment">
              <h2 className="payment__title">Payment</h2>
              <div className="card card--payment">
                <section className="card--payment__price">
                  <h2 className="card--payment__price__total">Total Price :</h2>
                  <span className="card--payment__money">$ {totalPrice}</span>
                </section>
                <Checkout />
              </div>
            </aside>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Payment;
