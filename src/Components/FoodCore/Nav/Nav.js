import React, { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [state1, setState1] = useState(() =>
    window.location.pathname === "/breakfast" ? true : false
  );
  const [state2, setState2] = useState(() =>
    window.location.pathname === "/lunch" ? true : false
  );
  const [state3, setState3] = useState(() =>
    window.location.pathname === "/dinner" ? true : false
  );

  console.log(state1);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <a
            style={{ color: `${state1 ? "red" : "black"}` }}
            className="underline"
            href="/breakfast"
          >
            Breakfast
          </a>
        </li>
        <li>
          <a
            style={{ color: `${state2 ? "red" : "black"}` }}
            className="underline"
            href="/lunch"
          >
            Lunch
          </a>
        </li>
        <li>
          <a
            style={{ color: `${state3 ? "red" : "black"}` }}
            className="underline"
            href="/dinner"
          >
            Dinner
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
