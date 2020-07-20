import React from "react";
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
import Core from "./Components/FoodCore/Core/Core";
import Signin from "./Components/Login/Signin";
import FoodDetails from "./Components/FoodCore/Core/FoodDetals/FoodDetails";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* <Router path="/login">
            <Login />
          </Router>
          <Route path="/signIn">
            <Signin />
          </Route>
          <Header /> */}
          <Route exact path="/">
            <Header />
            <FoodCore />
          </Route>
          <Route>
            <Route path="/foodView/:foodDetails">
              <FoodDetails />
            </Route>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
