import React from "react";
import Services from "./Services";
import ServiceNavBAr from "./ServiceNavBAr";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";
import Ac from "./AC/Ac";
import Car from "./Car/Car";
import Carpenter from "./Carpenter/Carpenter";
import Electrician from "./Electrician/Electrician";
import Cleaning from "./Cleaning/Cleaning";
import Gyser from "./Gyser/Gyser";
import Painter from "./Painter/Painter";
import Plumber from "./Plumber/Plumber";
import Text from "./Text/Text";
import "./Services.css";
import Footer from "../Footer/Footer";
const MainService = (props) => {
  let { path } = useRouteMatch();
  const {CartHandler}=props;
  return (
    <div>
      <Services />
      <ServiceNavBAr />
      
      <div>
      <Switch>
        <Route path={`${path}/ac`} >
        <Ac CartHandler={CartHandler} />
        </Route>
        
        <Route exact path={`${path}/car`} >
        <Car CartHandler={CartHandler} />
       </Route>
        
        
       
        <Route exact path={`${path}/Carpenter`} >
        <Carpenter CartHandler={CartHandler} />
        </Route>
       
        <Route exact path={`${path}/Cleaning`} >
        <Cleaning CartHandler={CartHandler} />
        </Route>
       
        <Route exact path={`${path}/Electrician`} >
        <Electrician CartHandler={CartHandler} />
        </Route>
        
        <Route exact path={`${path}/Gyser`} >
        <Gyser CartHandler={CartHandler} />
        </Route>
        
        <Route exact path={`${path}/Painter`}>
        <Painter CartHandler={CartHandler} />
        </Route>
       
        <Route exact path={`${path}/Plumber`} >
        <Plumber CartHandler={CartHandler} />
        </Route>
        <Redirect to="/services" />
      </Switch>
      </div>
      <Text/>
      
     <Footer/>
    </div>
  );
};

export default MainService;
