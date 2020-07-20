import React, { useState } from "react";
import "./Core.css";
import fakeData from "../../../FakeData";
import Breakfast from "./Breakfast/Breakfast";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Lunch from "./Lunch/Lunch";
import Dinner from "./Dinner/Dinner";
import FoodDetails from "./FoodDetals/FoodDetails";

const Core = () => {
  const data = fakeData;
  const [breakfast, setBreakfast] = useState(() =>
    data.filter((e) => e.category === "breakfast")
  );
  const [lunch, setLunch] = useState(() =>
    data.filter((e) => e.category === "lunch")
  );
  const [dinner, setDinner] = useState(() =>
    data.filter((e) => e.category === "dinner")
  );

  const [clickedFoodDetails, setClickedFoodDetails] = useState();

  const handleClickMoreInfo = (data) => {
    // setClickedFoodDetails(data);
    console.log(data);
  };

  return (
    <div className="food-Container">
      <Router>
        <Switch>
          <div className="meals">
            <Route exact path="/breakfast">
              <div className="breakfast-section row row-cols-1 row-cols-md-4 ">
                {breakfast.map((bk) => (
                  <Breakfast
                    key={bk.id}
                    handleClickMoreInfo={handleClickMoreInfo}
                    breakfast={bk}
                  />
                ))}
              </div>
            </Route>
            <Route exact path="/lunch">
              <div className="lunch-section row row-cols-1 row-cols-md-4 ">
                {lunch.map((ln) => (
                  <Lunch
                    key={ln.id}
                    handleClickMoreInfo={handleClickMoreInfo}
                    lunch={ln}
                  />
                ))}
              </div>
            </Route>
            <Route exact path="/dinner">
              <div className="dinner-section row row-cols-1 row-cols-md-4  ">
                {dinner.map((dn) => (
                  <Dinner
                    key={dn.id}
                    handleClickMoreInfo={handleClickMoreInfo}
                    dinner={dn}
                  />
                ))}
              </div>
            </Route>
            <Route exact path="/">
              <div className="lunch-section row row-cols-1 row-cols-md-4 ">
                {lunch.map((ln) => (
                  <Lunch
                    key={ln.id}
                    handleClickMoreInfo={handleClickMoreInfo}
                    lunch={ln}
                  />
                ))}
              </div>
            </Route>
            <Route path="/breakfast/foodView/:foodDetails">
              <FoodDetails />
            </Route>
            <Route path="/dinner/foodView/:foodDetails">
              <FoodDetails />
            </Route>
            <Route path="/lunch/foodView/:foodDetails">
              <FoodDetails />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
};

export default Core;
