import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-red-500 w-[100%] h-[70px] flex">
      <div className="bg-green-500 w-[25%] flex justify-start items-center p-[25px]">
        <h1>logo</h1>
      </div>

      <div className="bg-blue-500 w-[50%] flex  justify-center items-center gap-4">
        <h1>Button</h1>
        <h1>Button</h1>
        <h1>Button</h1>
        <h1>Button</h1>
      </div>
      <div className="bg-green-500 w-[25%] flex justify-center items-center">
    
        <h1>Button</h1>
      </div>
    </div>
  );
};

export default Navbar;
