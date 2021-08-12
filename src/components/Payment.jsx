import React, { useEffect } from "react";
import { getProductsAction } from "../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import IconBasket from "../assets/icons/basket.svg";
import IconLike from "../assets/icons/like.svg";
import Layout from "./Layout";

const Payment = () => {
  const dispatch = useDispatch();
  const getProducts = () => dispatch(getProductsAction());
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);
  return (
    <Layout>
      <main>
        <section className="payment">
          <h1 className="payment__title">Shopping Bag</h1>
          <div className="payment__container">
            <section className="payment__products">
              <h1 className="payment__title">Added Items</h1>
              {products.map((product) => (
                  <article className="card card--shopping-bag" key={product.id}>
                    <header>
                      <img
                        className="card__image"
                        src={product.imageUrl}
                        alt={product.name}
                      />
                      <h3 className="card__title">{product.name}</h3>
                    </header>
                    <div className="card__bottom">
                      <img
                        className="card__bottom__icon"
                        src={IconBasket}
                        alt=""
                      />
                      <img
                        className="card__bottom__icon--like"
                        src={IconLike}
                        alt=""
                      />
                      <span className="card__bottom__price">
                        ${product.price}
                      </span>
                    </div>
                  </article>
                ))}
            </section>
            <aside className="payment__payment">
              <h1 className="payment__title">Payment</h1>
              <div className="card card--payment">
                <section className="card--payment__price">
                  <h2 className="card--payment__price__total">Total Price :</h2>
                  <span className="card--payment__money">$123</span>
                </section>
                <button className="btn btn--payment">Checkout</button>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Payment;
