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
    "/mini-project/api/transactions/transfer/<username>",
    { amount, username }
  );
  return data;
};
export { deposit, withdraw };
