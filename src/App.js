import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import FoodCore from "./Components/FoodCore/FoodCore";
import Login from "./Components/Login/Login";
import Signin from "./Components/Login/Signin";
import FoodDetails from "./Components/FoodCore/Core/FoodDetals/FoodDetails";
import ReviewItem from "./Components/ReviewItem/ReviewItem";
import FinishingPage from "./Components/FinishingPage/FinishingPage";
import { PrivateRoute } from "./Components/firebase";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <FoodCore />
          </Route>
          <Route path="/foodView/:foodDetails">
            <FoodDetails />
          </Route>
          <Router path="/login">
            <Login />
          </Router>
          <Route path="/signIn">
            <Signin />
          </Route>
          <Route path="/review">
            <ReviewItem />
          </Route>
          <PrivateRoute path="/delivery">
            <FinishingPage />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
