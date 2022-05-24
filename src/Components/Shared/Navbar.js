import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  //   const user = true;
  // const user = false;

  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
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
      <li>
        <NavLink
          className="my-2 mr-5   text-accent font-semibold"
          to="/portfolio"
        >
          Portfolio
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
          <button
            onClick={logout}
            className="my-2 mr-5   text-accent font-semibold"
          >
            Logout
          </button>
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
    <header className="z-50 bg-white shadow-2xl sticky top-0">
      <div className=" ">
        <div className=" max-w-7xl mx-auto px-4">
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex="0"
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 grid gap-x-10"
                >
                  {menuItem}
                </ul>
              </div>
              <Link
                to="/"
                className="btn btn-ghost  text-accent text-xl uppercase"
              >
                electric tools
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal p-0 gap-y-5">{menuItem}</ul>
            </div>
            <div className="navbar-end">
              {!user && (
                <button
                  to="/login"
                  className=" border-none hover:bg-secondary rounded-xl hover:text-white text-accent font-semibold px-8 py-3 bg-primary"
                >
                  Get started
                </button>
              )}
              {user && (
                <button className="border-none hover:bg-secondary rounded-xl hover:text-white text-accent font-semibold px-8 py-3 bg-primary">
                  <Link to="/profile">{user?.user?.displayName} Profile</Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
