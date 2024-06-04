import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { me } from "../api/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deposit, withdraw } from "../api/Transaction";
import Footer from "../components/Footer";

const Home = () => {
  const [amount, setAmount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const queryClient = useQueryClient();

  const { data: balanceData } = useQuery({
    queryKey: ["getBalance"],
    queryFn: () => me(),
  });

  const { mutate: depositMutate } = useMutation({
    mutationKey: ["deposit"],
    mutationFn: () => deposit(amount),
    onSuccess: () => {
      queryClient.invalidateQueries(["getBalance"]);
    },
    onError: (error) => {
      console.error("Deposit failed:", error);
    },
  });

  const { mutate: withdrawMutate } = useMutation({
    mutationKey: ["withdraw"],
    mutationFn: () => withdraw(amount),
    onSuccess: () => {
      queryClient.invalidateQueries(["getBalance"]);
    },
    onError: (error) => {
      console.error("Withdrawal failed:", error);
    },
  });

  const onChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const onClickHandler = () => {
    if (amount <= 0) {
      setErrorMessage("Amount must be greater than 0.");
      return;
    }

    if (isChecked && balanceData?.balance < amount) {
      setErrorMessage("Insufficient balance for withdrawal.");
      return;
    }

    setErrorMessage("");

    if (isChecked) {
      withdrawMutate();
    } else {
      depositMutate();
    }
  };
  return (
    <div className=" w-full h-[100vh] flex flex-col j items-center font-bold">
      <Navbar />
      <div className=" w-[100%] h-[89vh]  flex flex-col justify-start items-center gap-12 p-4">
        <div className=" w-[75%] h-[180px] lg:w-[400px] rounded-3xl p-4 wrap flex flex-col justify-center items-center text-center gap-6 shadow-lg shadow-slate-500 ">
          <p className="text-xl">your available Balance :</p>
          <div className="flex justify-center items-center gap-2">
            <p className="text-lg font-semibold">{balanceData?.balance}</p>
            <p className="text-lg font-bold text-green-600">KWD</p>
          </div>
        </div>
        <div className=" w-[75%] h-[240px] lg:w-[400px] rounded-3xl wrap flex flex-col justify-center items-center text-center gap-5 shadow-lg shadow-slate-500">
          <div className="flex justify-center items-center gap-2">
            <p>Deposit </p>

            <div>
              <input
                className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
            </div>
            <p>Withdraw</p>
          </div>
          <p>Amount</p>
          <input
            onChange={onChangeHandler}
            type="number"
            name="amount"
            id="amount"
            placeholder="Amount"
            className="w-[75%] h-[35px] border border-gray-200 rounded-md p-3"
          />
          <button
            onClick={onClickHandler}
            className="bg-gray-300 hover:bg-gray-700  font-bold py-2 px-4 rounded text-md font-bold sm:text-sm"
          >
            Submit
          </button>
          {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
