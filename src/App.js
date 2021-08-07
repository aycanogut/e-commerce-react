import './App.css';
import React, { useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsAction } from './redux/actions/productActions';
import { Switch, Route } from 'react-router-dom';
import Shop from './components/Shop';
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const dispatch = useDispatch();
  const getProducts = () => dispatch(getProductsAction());
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Suspense fallback={<div>Yükleniyor...</div>}>
          <Route  path="/" component={Header} />
          <Route path="/" component={Shop} />
          <Route  path="/" component={Footer} />
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
