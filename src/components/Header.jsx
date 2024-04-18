import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <ul className="Header">
      <li>
        <NavLink to="/people">People</NavLink>
      </li>
      <li>
        <NavLink to="/planets">Planets</NavLink>
      </li>
      <li>
        <NavLink to="/starships">Starships</NavLink>
      </li>
    </ul>
  );
};
