import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import Menu from "./Menu";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);
  const [show, setShow] = useState(false);
  const onClose = () => setShow(false);
  const onOpen = () => setShow(true);

  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="w-full h-[70px] p-4 flex justify-between md:delil-antara md:item-center ">
      {/*Logo*/}
      <div className=" text-3xl font-bold">
        <div className="w-full h-[70px]  flex justify-start items-center p-1 gap-3">
          <img
            alt=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFvoCzaRO2NbZPaVvr9IY2Zltp6evQIt1X0clcmPW27PDVIlhlstUgjcJd2E6qL-EhVww&usqp=CAU"
            className="  h-full object-cover"
          />

          <p className="text-green-700 text-xl font-bold sm:text-sm">
            Full Stack Bank
          </p>
        </div>
      </div>

      <div className="md:hidden">
        <button onClick={onOpen} className="">
          Menu
        </button>
      </div>

      <Menu show={show} onClose={onClose} onOpen={() => {}} />

      {/* Navigation links */}
      <div className="hidden md:flex space-x-4">
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
    </nav>
    // <div className="  w-[100%] h-[70px] flex">
    //   <div className=" w-[50%] flex justify-start items-center p-[25px]">
    //     <div className="w-full h-[90px]  flex justify-start items-center p-5">
    //       <img
    //         alt=""
    //         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFvoCzaRO2NbZPaVvr9IY2Zltp6evQIt1X0clcmPW27PDVIlhlstUgjcJd2E6qL-EhVww&usqp=CAU"
    //         className=" h-full  object-cover"
    //       />

    //       <p className="text-green-700 text-md font-bold sm:text-sm">
    //         Full Stack Bank
    //       </p>
    //     </div>
    //   </div>

    //   <div className=" w-[100%] justify-between items-center lg:block md:hidden">
    //     <div className="w-[100%] flex justify-between">
    //       <div className=" w-[50%] flex  justify-start items-center gap-14">
    //         <NavLink to="/home">Home</NavLink>
    //         <NavLink to="/transactions">Transactions</NavLink>
    //         <NavLink to="/allprofiles">Users</NavLink>
    //         <NavLink to="/profile">Profile</NavLink>
    //       </div>
    //       <div className=" w-[50%] flex justify-end items-center p-[25px]">
    //         <button
    //           onClick={logout}
    //           className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-md font-bold sm:text-sm"
    //         >
    //           Logout
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
