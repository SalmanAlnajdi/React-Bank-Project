import React from 'react'
import Navbar from '../components/Navbar'

const Transactions = () => {
  return (
    <div className=" w-full h-[100vh] flex flex-col items-center font-bold">
    <Navbar />
    <div className=" w-[100%] h-[80vh]  flex flex-col justify-start items-center gap-12 p-4">
      <div className=" w-[90%] h-[80%] lg:w-[80%] lg:h-[100px]  rounded-3xl p-4 wrap flex justify-center items-center text-center gap-6 shadow-lg shadow-slate-200 ">
       <div className='h-[100%] w-[100%] flex justify-start items-center p-[25px]' >
         <p className="text-xl">test</p>
       </div>
        
      <div className='h-[100%] w-[100%] flex justify-start items-center p-[25px]'>
        <p className="text-xl">test</p>
      </div>
      <div className='h-[100%] w-[100%] flex justify-start items-center p-[25px]'>
      <p className="text-xl">test</p>
      </div>
      </div>
    </div>
    <div className="bg-blue-500  w-full h-[100px] flex flex-col justify-center items-center gap-4">
      footer
    </div>
  </div>
  )
}

export default Transactions