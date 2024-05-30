import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../api/auth";
import Transfer from "../components/Transfer";

const Allprofiles = () => {
  const [show, setShow] = useState(false);
  const onClose = () => setShow(false);
  const onOpen = () => setShow(true);
  const { data: users } = useQuery({
    queryKey: "allprofiles",
    queryFn: () => getAllUsers(),
  });

  return (
    <div className=" w-full h-[100vh] flex flex-col  items-center font-bold">
      <Navbar />
      <div className=" w-[100%] h-auto wrap flex-wrap flex  justify-start gap-12 p-4">
        {users?.map((user) => (
          <div
            key={user.id}
            className=" w-[200px] h-[240px] lg:w-[250px] lg:h-[250px]  rounded-3xl p-4 wrap flex flex-col justify-center items-center text-center gap-6 shadow-lg shadow-slate-500 "
          >
            <img
              src={`https://react-bank-project.eapi.joincoded.com/${user.image}`}
              alt="userimage"
              className="w-10 h-10 rounded-full mr-2"
            />
            <p className="text-xl">{user.username}</p>
            <p className="text-lg font-semibold">balance : {user.balance}</p>

            <button
              onClick={onOpen}
              className=" hover:bg-green-700  hover:text-white font-bold py-2 px-4 rounded text-md font-bold sm:text-sm"
            >
              Transfer
            </button>
            <Transfer
              show={show}
              onClose={onClose}
              onOpen={() => {}}
              username={user?.username}
            />
          </div>
        ))}
      </div>

      <div className="bg-blue-500  w-full h-[100px] flex flex-col justify-center items-center gap-4">
        footer
      </div>
    </div>
  );
};

export default Allprofiles;
