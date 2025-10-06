import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink to={"/"} className={({isActive}) => isActive ? "border border-green-500 font-bold text-xl text-green-500 px-5 py-2 rounded-xl": "text-xl px-5 py-2"}>
            Home
          </NavLink>
          <NavLink to={"/listedBooks"} className={({isActive}) => isActive ? "border border-green-500 font-bold text-xl text-green-500 px-5 py-2 rounded-xl": "text-xl px-5 py-2"}>
            Listed Books
          </NavLink>
          <NavLink to={"pageToRead"} className={({isActive}) => isActive ? "border border-green-500 font-bold text-xl text-green-500 px-5 py-2 rounded-xl": "text-xl px-5 py-2"}>
            Page To Read
          </NavLink>
          </ul>
        </div>
        <Link to={"/"} className="font-bold  text-3xl">Book Vibe</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink to={"/"} className={({isActive}) => isActive ? "border border-green-500 font-bold text-xl text-green-500 px-5 py-2 rounded-xl": "text-xl px-5 py-2"}>
            Home
          </NavLink>
          <NavLink to={"/listedBooks"} className={({isActive}) => isActive ? "border border-green-500 font-bold text-xl text-green-500 px-5 py-2 rounded-xl": "text-xl px-5 py-2"}>
            Listed Books
          </NavLink>
          <NavLink to={"pageToRead"} className={({isActive}) => isActive ? "border border-green-500 font-bold text-xl text-green-500 px-5 py-2 rounded-xl": "text-xl px-5 py-2"}>
            Page To Read
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <a className="text-white font-bold bg-green-500 rounded-xl px-5 py-3">Sign In</a>
        <a className="text-white font-bold bg-cyan-400 rounded-xl px-5 py-3">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
