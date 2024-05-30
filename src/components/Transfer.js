import React, { useEffect, useState } from "react";

const Transfer = ({ show, onOpen, onClose, username }) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    console.log(username);
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-10">
      <div className="bg-gray-800 rounded-md shadow-md w-full max-w-md p-6 overflow-scroll max-h-[70%]">
        <h2 className="text-3xl text-white font-semibold mb-6">Transfer to</h2>
        <h2>{username}</h2>
        <form onSubmit={(e) => console.log(e)}>
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
              onChange={(e) => console.log(e.target.value)}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
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
