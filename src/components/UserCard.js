import React, { useState } from "react";
import Transfer from "./Transfer";

const UserCard = ({ user }) => {
  const [show, setShow] = useState(false);
  const onClose = () => setShow(false);
  const onOpen = () => setShow(true);
  const [userData, setUserData] = useState();
  return (
    <div className=" w-[200px] h-[240px] lg:w-[250px] lg:h-[250px]  rounded-3xl p-4 wrap flex flex-col justify-center items-center text-center gap-6 shadow-lg shadow-slate-500 ">
      <img
        src={`https://react-bank-project.eapi.joincoded.com/${user.image}`}
        alt="userimage"
        className="w-10 h-10 rounded-full mr-2"
      />
      <p className="text-xl">{user.username}</p>
      <p className="text-lg font-semibold">balance : {user.balance}</p>

      <button
        onClick={() => {
          onOpen();
          setUserData(user);
        }}
        className=" hover:bg-green-700  hover:text-white font-bold py-2 px-4 rounded text-md font-bold sm:text-sm"
      >
        Transfer
      </button>

      <Transfer
        show={show}
        onClose={onClose}
        onOpen={() => {}}
        username={userData?.username}
      />
    </div>
  );
};

export default UserCard;
