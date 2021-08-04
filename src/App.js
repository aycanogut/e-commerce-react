import "./App.css";
import React, { useEffect, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAction } from "./redux/actions/productActions";
import { Switch, Route } from "react-router-dom";
const Header = lazy(() => import("./components/Header"));

function App() {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const getProducts = () => dispatch(getProductsAction());

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Suspense fallback={<div>Yükleniyor...</div>}>
          <Route path="/shop" component={Header} />
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
