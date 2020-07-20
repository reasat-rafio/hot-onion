import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import FoodCore from "./Components/FoodCore/FoodCore";

function App() {
  return (
    <div>
      <Header />
      <FoodCore />
    </div>
  );
}

export default App;
