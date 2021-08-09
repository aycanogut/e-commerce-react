import React, {useEffect} from "react";
import {getProductsAction} from "../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import IconBasket from '../assets/icons/basket.svg';

const Shop = () => {
  const dispatch = useDispatch();
  const getProducts = () => dispatch(getProductsAction());
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);
  return (
    <main>
      <section className="shop">
        <h3 className="shop__title">shop</h3>
        <div className="shop__card__container">
        {
            products.map(product =>(
                <article className="shop__card" key={product.id}>
                  <header>
                  <h3 className="shop__card__title">{product.name}</h3>
                    <img className="shop__card__item__image" src={product.imageUrl} alt={product.name} />
                    {/* <h3 className="shop__card__item__title">Lorem, ipsum.</h3> */}
                    <p className="shop__card__item__identifier">
                      Identifier number
                    </p>
                  </header>
                  <div className="shop__card__item__bottom">
                    <img className="shop__card__item__bottom__icon" src={IconBasket} alt="" />
                    <span className="shop__card__item__bottom__old-price">
                      $999
                    </span>
                    <span className="shop__card__item__bottom__new-price">
                    {product.price}
                    </span>
                  </div>
                </article>
            ))
          }
        </div>
      </section>
    </main>
  );
};

export default Shop;
