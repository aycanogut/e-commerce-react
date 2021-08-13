import React, { useEffect } from "react";
import { getProductsAction } from "../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import IconBasket from "../assets/icons/basket.svg";
import IconLike from "../assets/icons/like.svg";
import Layout from "./Layout";

const Favorites = () => {
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
        <section className="favorites">
          <h1 className="favorites__title">Favorites</h1>
          <div className="favorites__container">
            <section className="favorites__products">
              <div className="favorites__products__container">
                {products.map((product) => (
                      <article className="card card--favorites" key={product.id}>
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
                </div>
            </section>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Favorites;
