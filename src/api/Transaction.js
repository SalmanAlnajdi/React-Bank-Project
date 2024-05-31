import instance from ".";

const deposit = async (amount) => {
  const { data } = await instance.put(
    "/mini-project/api/transactions/deposit",
    {
      amount,
    }
  );
  return data;
};

const withdraw = async (amount) => {
  const { data } = await instance.put(
    "/mini-project/api/transactions/withdraw",
    { amount }
  );
  return data;
};

const transfer = async (amount, username) => {
  const { data } = await instance.put(
    `/mini-project/api/transactions/transfer/${username}`,
    { amount, username }
  );
  return data;
};

const getTransactions = async () => {
  const { data } = await instance.get("/mini-project/api/transactions/my");
  return data;
};

export { deposit, withdraw , transfer , getTransactions };
