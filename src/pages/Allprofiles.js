import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../api/auth";
import Transfer from "../components/Transfer";
import MyLoader from "../components/MyLoader";
import UserCard from "../components/UserCard";
import Footer from "../components/Footer";

const Allprofiles = () => {
  const [show, setShow] = useState(false);
  const onClose = () => setShow(false);
  const onOpen = () => setShow(true);
  const [userData, setUserData] = useState();
  const { data: users, isLoading } = useQuery({
    queryKey: "allprofiles",
    queryFn: () => getAllUsers(),
  });

  if (isLoading) {
    return (
      <div className="w-full h-[100vh] flex flex-col  items-center font-bold">
        <Navbar />
        <div className="w-[100%] h-auto wrap flex-wrap flex  justify-start gap-12 p-4">
          <div className=" w-[200px] h-[240px] lg:w-[250px] lg:h-[250px]  rounded-3xl p-4 wrap flex flex-col justify-center items-center text-center gap-6 shadow-lg shadow-slate-500 ">
            <MyLoader />
          </div>
          <div className=" w-[200px] h-[240px] lg:w-[250px] lg:h-[250px]  rounded-3xl p-4 wrap flex flex-col justify-center items-center text-center gap-6 shadow-lg shadow-slate-500 ">
            <MyLoader />
          </div>
          <div className=" w-[200px] h-[240px] lg:w-[250px] lg:h-[250px]  rounded-3xl p-4 wrap flex flex-col justify-center items-center text-center gap-6 shadow-lg shadow-slate-500 ">
            <MyLoader />
          </div>
          <div className=" w-[200px] h-[240px] lg:w-[250px] lg:h-[250px]  rounded-3xl p-4 wrap flex flex-col justify-center items-center text-center gap-6 shadow-lg shadow-slate-500 ">
            <MyLoader />
          </div>
          <div className=" w-[200px] h-[240px] lg:w-[250px] lg:h-[250px]  rounded-3xl p-4 wrap flex flex-col justify-center items-center text-center gap-6 shadow-lg shadow-slate-500 ">
            <MyLoader />
          </div>
        </div>
      </div>
    );
  }

  const userList = users?.map((user) => <UserCard key={user.id} user={user} />);
  return (
    <div className=" w-full h-[100vh] flex flex-col  items-center font-bold">
      <Navbar />
      <div className=" w-[100%] h-auto wrap flex-wrap flex  justify-start gap-12 p-4">
        {userList}
      </div>

      <Footer />
    </div>
  );
};

export default Allprofiles;
