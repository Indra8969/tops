import React from "react";
import { NavLink } from "react-router-dom";

export const Header = ({ handleTheme }) => {
  const handleClick = (e) => {
    handleTheme()
  };
  return (
    <div className="header">
      <nav>
        <div>
          <NavLink
            to="/"
            children={({ isActive }) => (isActive ? "< Home/ >" : "Home")}
          ></NavLink>
        </div>
        <div>
          <NavLink
            to="/skills"
            children={({ isActive }) => (isActive ? "< Skills/ >" : "Skills")}
          ></NavLink>
        </div>
        <div>
          <NavLink
            to="/projects"
            children={({ isActive }) =>
              isActive ? "< Projects/ >" : "Projects"
            }
          ></NavLink>
        </div>
        <div>
          <NavLink
            to="/About"
            children={({ isActive }) => (isActive ? "< About/ >" : "About")}
          ></NavLink>
        </div>
        <div>
          <button className="themebtn" onClick={handleClick}>Theme</button>
        </div>
      </nav>
    </div>
  );
};
