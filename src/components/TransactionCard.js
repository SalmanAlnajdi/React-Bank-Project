import React from 'react'
import { FaArrowDown, FaArrowUp, FaExchangeAlt } from 'react-icons/fa';

const TransactionCard = ({transaction}) => {

    const getTransactionStyle = (type) => {
        switch (type) {
          case 'deposit':
            return { icon: <FaArrowDown className="text-green-500" />, color: 'bg-green-100' };
          case 'withdraw':
            return { icon: <FaArrowUp className="text-red-500" />, color: 'bg-red-100' };
          case 'transfer':
            return { icon: <FaExchangeAlt className="text-red-500" />, color: 'bg-red-100' };
          default:
            return { icon: null, color: 'bg-gray-100' };
        }
      };
      const { icon, color } = getTransactionStyle(transaction.type);
 
      
  return (
    
         <div
              className={`w-[90%] h-[80%] lg:w-[80%] lg:h-[100px] rounded-3xl p-4 wrap flex justify-center items-center text-center gap-6 shadow-lg shadow-slate-200  ${color} `}
            >
              <div className="h-[100%] w-[10%] flex justify-center items-center">
                {icon}
              </div>
              <div className="h-[100%] w-[30%] flex justify-start items-center p-[25px]">
                <p className="text-xl">{transaction.amount}</p>
              </div>
              <div className="h-[100%] w-[30%] flex justify-start items-center p-[25px]">
                <p className="text-xl">{new Date(transaction.createdAt).toLocaleDateString()}</p>
              </div>
              <div className="h-[100%] w-[30%] flex justify-start items-center p-[25px]">
                <p className="text-xl capitalize">{transaction.type}</p>
              </div>
            </div>
   
  )
}

export default TransactionCard