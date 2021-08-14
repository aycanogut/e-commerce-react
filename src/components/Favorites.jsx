import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "./Layout";
import {
  removeFromFavoriteAction,
  addToFavoriteAction,
} from "../redux/actions/favoriteActions";
import { addToCartAction } from "../redux/actions/cartActions";
import toast, { Toaster } from "react-hot-toast";
import Card from "./Card";
import Title from "./Title";

const Favorites = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorites);

  const addToCart = (product) => {
    dispatch(addToCartAction(product));
    toast.success(`${product.name} added to cart`);
  };
  const toggleFavorites = (product) => {
    dispatch(removeFromFavoriteAction(product));
    toast.success(`${product.name} removed from favorites`);
  };
  return (
    <Layout>
      <Toaster position="bottom-right" />
      <Title title="Favorites" />
      <main>
        <section className="favorites">
          <h1 className="favorites__title">Favorites</h1>
          <div className="favorites__container">
            <section className="favorites__products">
              <div className="favorites__products__container">
                {favorites.map((product) => (
                  <Card
                    product={product}
                    key={product.id}
                    addToCart={() => addToCart(product)}
                    toggleFavorites={() => toggleFavorites(product)}
                  />
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
