import React from "react";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/">
        <img
          className="image"
          src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
          alt="Homepage"
        />
      </Link>
      <Outlet />
    </div>
  );
}

export default NavBar;
