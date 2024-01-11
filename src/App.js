import "./App.css";
import { useContext, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import NotFound from "./components/NotFound";
import ShoppingContext from "./context/shopping/shoppingContext";
import { auth } from "./firebase";
import Payment from "./components/Payment";
import Orders from "./components/Orders";

const promise = loadStripe(
  "pk_test_51OX0x3B8NuuPSxTpwbIcBbErFCC0CllPZH8wcDtwCv8Bu9TOa6l0RKmK4Rrr3TvwLncT6nMXOGsLsdPcOQaCM8rA00hPutHWzu"
);

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {};
  }, []);

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
