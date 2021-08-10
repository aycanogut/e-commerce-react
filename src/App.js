import "./App.css";
import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
const Footer = lazy(() => import("./components/Footer"));
const SignUp = lazy(() => import("./components/SignUp"));
const Login = lazy(() => import("./components/Login"));
const Shop = lazy(() => import("./components/Shop"));

function App() {
  return (
    <div className="App">
      <Switch>
        <Suspense fallback={<div>Yükleniyor...</div>}>
          <Route path="/" exact component={Shop} />
          <Route path="/footer" component={Footer} />
          <Route path="/melisa" component={SignUp} />
          <Route path="/nihat" component={Login} />
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
