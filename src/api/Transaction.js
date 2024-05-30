import instance from ".";


const deposit = async (amount) => {
    const { data } = await instance.put("/mini-project/api/transactions/deposit", {
        amount,
    });
    return data;
};

const withdraw = async (amount) => {
    const { data } = await instance.put("/mini-project/api/transactions/withdraw", { amount });
    return data;
}
export { deposit , withdraw}