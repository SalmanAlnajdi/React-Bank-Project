import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const Menu = ({ show, onOpen, OnClose }) => {
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);

  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  if (!show) {
    return null;
  }

  return (
    <div className="bg-green-100 rounded-md shadow-md w-full max-w-md p-6   h-auto">
      <div className="flex flex-col wrap ">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/transactions">Transactions</NavLink>
        <NavLink to="/allprofiles">Users</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <button
          onClick={logout}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-md font-bold sm:text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Menu;
