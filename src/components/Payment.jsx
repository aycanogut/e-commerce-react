import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { totalPriceAction } from "../redux/actions/cartActions";
import Checkout from "./Checkout";
import Layout from "./Layout";
import Title from "./Title";
import Quantity from "./Quantity";
import { Link } from "react-router-dom";

const Payment = () => {
  const { user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPriceOfCart = () => dispatch(totalPriceAction());
  const { totalPrice } = useSelector((state) => state.cart);

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
                        src={cartItem.imageURL}
                        alt={cartItem.name}
                      />
                      <h3 className="card__title">{cartItem.name}</h3>
                    </header>
                    <div className="card__bottom">
                      <Quantity
                        cartItem={cartItem}
                        quantity={cartItem.quantity}
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
                {user ? (
                  <Checkout />
                ) : (
                  <Link style={{ fontSize: "1.65rem" }} to="/login">
                    Login to Checkout
                  </Link>
                )}
              </div>
            </aside>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Payment;
