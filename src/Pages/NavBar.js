import React from "react";
import { Link, NavLink } from "react-router-dom";
import './routes.css'
const NavBar = () => {
  return (
    <div>
      <ul>
        <p>
          <NavLink
            to="/"
            // style={({ isActive }) =>
            //   isActive
            //     ? {
            //         backgroundColor: "#f26262",
            //         color: "black",
            //         textDecoration: "none"
            //       }
            //     : { color: "black", textDecoration: "none" }
            // }
            className={({isActive}) => isActive ? "nav-style" : "non-active"}
          >
            {/* {({isActive}) => isActive ? "HOME" : "Non active"} */}
            Home
          </NavLink>
        </p>
        <li>
          <NavLink
            to="/contact"
            // style={({ isActive }) =>
            //   isActive
            //     ? {
            //         backgroundColor: "#f26262",
            //         color: "black",
            //         textDecoration: "none"
            //       }
            //     : { color: "black", textDecoration: "none" }
            // }
            className={({isActive}) => isActive ? "nav-style" : "non-active"}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            // style={({ isActive }) =>
            //   isActive
            //     ? {
            //         backgroundColor: "#f26262",
            //         color: "black",
            //         textDecoration: "none"
            //       }
            //     : { color: "black", textDecoration: "none" }
            // }
            className={({isActive}) => isActive ? "nav-style" : "non-active"}
          >
            Signup
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
