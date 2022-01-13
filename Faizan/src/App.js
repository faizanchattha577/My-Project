import React, { useState, useCallback } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./Home/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home/Home";
import MainService from "./Services/MainService";
import MainAbout from "./About/MainAbout";
import Contact from "./Contact/Contact";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import Cart from "./Cart/Cart";
import Appointment from "./Appointment/Appointment";
import FormSubmit from "./FormSubmit/FormSubmit";
import {AuthContext} from './auth'

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((id) => {
    setIsLoggedIn(true);
    setUserId(id);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  const [cart, SetCart] = useState([]);
  //Date
  const [gDate, setgDate] = useState("");
  //Bill
  const [gbill, setGBill] = useState(0);
  const CartHandler = (res) => {
    console.log(res);
    const newItem = res;
    newItem["quantity"] = 1;
    SetCart((Item) => [...Item, res]);
    //SetCart(...cart,res)
  };
  const removeCart = (id) => {
    SetCart((Items) => {
      return Items.filter((goal) => goal.id !== id);
    });
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <div>
        <div>
          <NavBar cart={cart} />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/services">
              <MainService CartHandler={CartHandler} />
            </Route>
            <Route exact path="/MainAbout/" component={MainAbout} />
            <Route exact path="/Contact/" component={Contact} />
            <Route exact path="/Signup/" component={Signup} />
            <Route exact path="/Login/" component={Login} />
            <Route exact path="/Appointment/">
              <Appointment setDate={setgDate} />
            </Route>
            <Route exact path="/FormSubmit/">
              <FormSubmit sBill={gbill} gDate={gDate} />
            </Route>
            <Route exact path="/Cart/">
              <Cart
                cart={cart}
                removeCart={removeCart}
                SetCart={SetCart}
                sBill={gbill}
                setSBill={setGBill}
              />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </AuthContext.Provider>
  );
};
export default App;
