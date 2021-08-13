import React, { useEffect, useState } from "react";
import { getProductsAction } from "../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import Layout from "./Layout";
import { addToCartAction } from "../redux/actions/cartActions";
import {
  addToFavoriteAction,
  removeFromFavoriteAction,
} from "../redux/actions/favoriteActions";
import toast, { Toaster } from "react-hot-toast";
import Card from "./Card";

const Shop = () => {
  const dispatch = useDispatch();
  const getProducts = () => dispatch(getProductsAction());
  const { products } = useSelector((state) => state.product);
  const { favorites } = useSelector((state) => state.favorites);

  useEffect(() => {
    getProducts();
  }, []);

  const addToCart = (product) => {
    dispatch(addToCartAction(product));
    toast.success(`${product.name} added to cart`);
  };

  const toggleFavorites = (product) => {
    const isFavorites = favorites.find(
      (favorite) => favorite.id === product.id
    );

    if (isFavorites) {
      dispatch(removeFromFavoriteAction(product));
      toast.success(`${product.name} removed from favorites`);
    } else {
      dispatch(addToFavoriteAction(product));
      toast.success(`${product.name} added to favorites`);
    }
  };
  return (
    <Layout>
      <Toaster position="bottom-right" />
      <main>
        <section className="shop">
          <h3 className="shop__title">shop</h3>
          <div className="shop__container">
            {products.map((product) => (
              <Card
                product={product}
                key={product.id}
                addToCart={() => addToCart(product)}
                toggleFavorites={() => toggleFavorites(product)}
              />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Shop;
