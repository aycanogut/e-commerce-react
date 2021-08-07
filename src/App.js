import './App.css';
import React, { useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsAction } from './redux/actions/productActions';
import { Switch, Route } from 'react-router-dom';
import Shop from './components/Shop';
import SignUp from './components/SignUp';
import { Login } from './components/Login';
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
          <Route path="/" exact component={Header} />
          <Route path="/shop" component={Shop} />
          <Route path="/footer" component={Footer} />
          <Route path="/melisa" component={SignUp} />
          <Route path="/nihat" component={Login} />
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
