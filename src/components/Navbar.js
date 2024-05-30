import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="  w-[100%] h-[70px] flex">
      <div className=" w-[25%] flex justify-start items-center p-[25px]">
      <div className="w-full h-[90px]  flex justify-start items-center p-5">
        <img
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFvoCzaRO2NbZPaVvr9IY2Zltp6evQIt1X0clcmPW27PDVIlhlstUgjcJd2E6qL-EhVww&usqp=CAU"
          className=" h-full  object-cover"
        />

        <p className="text-green-700 text-md font-bold sm:text-sm">
          Full Stack Bank
        </p>
      </div>

      </div>




    
      <div className="bg-blue-500 w-[50%] flex  justify-center items-center gap-14">
        <NavLink to="/home">Home</NavLink>
        <NavLink to='/transactions'>Transactions</NavLink>
        <NavLink to='/allprofiles'>Users</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
      </div>
      <div className="bg-green-500 w-[25%] flex justify-end items-center p-[25px]">
         <button>
          Logout
         </button>
      </div>
    </div>
  );
};

export default Navbar;
