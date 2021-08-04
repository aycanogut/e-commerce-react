import React from "react";

const Shop = () => {
  return (
    <main>
      <div className="container">
        <section className="shop">
          <h2 className="shop__title">shop</h2>
          <div className="shop__card">
            <article className="shop__card__item">
              <header>
                <img className="shop__card__item__image" src="" alt="" />
                <h3 className="shop__card__item__title">Lorem, ipsum.</h3>
                <p className="shop__card__item__identifier">
                  Identifier number
                </p>
              </header>
              <div className="shop__card__item__bottom">
                <img className="shop__card__item__bottom__icon" src="" alt="" />
                <span className="shop__card__item__bottom__old-price">
                  $999
                </span>
                <span className="shop__card__item__bottom__new-price">
                  $699
                </span>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Shop;
