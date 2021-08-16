import "./App.css";
import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Loader } from "./components/Loader";
const SignUp = lazy(() => import("./components/SignUp"));
const Login = lazy(() => import("./components/Login"));
const Shop = lazy(() => import("./components/Shop"));
const Payment = lazy(() => import("./components/Payment"));
const Favorites = lazy(() => import("./components/Favorites"));
const Error = lazy(() => import("./components/Error"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact component={Shop} />
          <Route path="/payment" exact component={Payment} />
          <Route path="/favorites" exact component={Favorites} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="*" component={Error} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
