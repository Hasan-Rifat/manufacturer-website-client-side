import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  //   const user = true;
  const user = false;
  const menuItem = (
    <>
      <li>
        <NavLink className="my-2 mr-5   text-accent font-semibold" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="my-2 mr-5   text-accent font-semibold" to="/blogs">
          Blogs
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink
            className="my-2 mr-5   text-accent font-semibold"
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </li>
      )}

      {user && (
        <li>
          <NavLink
            className="my-2 mr-5   text-accent font-semibold"
            to="/logout"
          >
            Logout
          </NavLink>
        </li>
      )}

      {!user && (
        <>
          <li>
            <NavLink
              className="my-2 mr-5   text-accent font-semibold  "
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              className="my-2 mr-5   text-accent font-semibold "
              to="/register"
            >
              Register
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <header className="shadow-lg mb-6 lg:mb-12">
      <div className=" max-w-7xl mx-auto">
        <div class="navbar bg-base-100">
          <div class="navbar-start">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 grid gap-x-10"
              >
                {menuItem}
              </ul>
            </div>
            <Link to="/" class="btn btn-ghost  text-accent text-xl uppercase">
              electric tools
            </Link>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0 gap-y-5">{menuItem}</ul>
          </div>
          <div class="navbar-end">
            {!user && (
              <button
                to="/login"
                class=" border-none hover:bg-secondary rounded-xl hover:text-white text-accent font-semibold px-8 py-3 bg-primary"
              >
                Get started
              </button>
            )}
            {user && (
              <button className="border-none hover:bg-secondary rounded-xl hover:text-white text-accent font-semibold px-8 py-3 bg-primary">
                <Link to="/profile">Profile</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
