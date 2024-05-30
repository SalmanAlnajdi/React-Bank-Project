import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { transfer } from "../api/Transaction";
import { me } from "../api/auth";


const Transfer = ({ show, onOpen, onClose, username }) => {
  const [amount, setAmount] = useState();
  const queryClient =useQueryClient();
  const [errorMessage, setErrorMessage] = useState('');

 
  const { data: balanceData } = useQuery({
    queryKey: ["getBalance"],
    queryFn: () => me(),
  });

 const { mutate: transferMutate } = useMutation({
    mutationKey: ["transfer"],
    mutationFn: () => transfer(amount, username),
    onSuccess: () => {
     onClose();
     setAmount()
      queryClient.invalidateQueries(["getAllUsers"]);
    },
    onError: (error) => {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Transfer failed due to an unexpected error.");
      }
    },
    
  })


  const onChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const onClickHandler = () => {
    if (amount <= 0) {
      setErrorMessage('Amount must be greater than 0.');
      return;
    }

    if (balanceData?.balance < amount) {
      setErrorMessage('Insufficient balance for the transfer.');
      return;
    }

    setErrorMessage('');
    transferMutate();
  }; 
  if (!show) {
    return null;
  }

  return (
    <div className="fixed overflow-scroll inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-10">
      <div className="bg-gray-700 rounded-md shadow-md w-full max-w-md p-6  max-h-[70%]">
        <div className="flex  items-center justify-between">

        <h2 className="text-3xl text-white font-semibold mb-6">Transfer to</h2>
        <h2 className="text-lg text-green-500 font-semibold mb-6"> {username}</h2>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-white text-sm font-medium mb-2"
            >
              amount
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              placeholder="Enter amount"
              onChange={onChangeHandler}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
          <div className="flex justify-center">
            <button
            onClick={onClickHandler}
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Transfer
            </button>
            <button
              type="button"
              onClick={()=>{
                setErrorMessage('');
                setAmount();
                onClose();
              }}
              className="ml-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Transfer;
