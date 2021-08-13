import "./App.css";
import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
const Footer = lazy(() => import("./components/Footer"));
const SignUp = lazy(() => import("./components/SignUp"));
const Login = lazy(() => import("./components/Login"));
const Shop = lazy(() => import("./components/Shop"));
const Payment = lazy(() => import("./components/Payment"));
const Favorites = lazy(() => import("./components/Favorites"));

function App() {
  return (
    <div className="App">
     <Suspense fallback={<div>Yükleniyor...</div>}>
      <Switch>
          <Route path="/" exact component={Shop} />
          <Route path="/payment" exact component={Payment} />
          <Route path="/favorites" exact component={Favorites} />
          <Route path="/footer" component={Footer} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
      </Switch>
      </Suspense>
    </div>
  );
}

export default App;
