import instance from ".";
import { setToken } from "../api/storage";

const register = async (userInfo) => {
  const userData = new FormData();
  for (const key in userInfo) {
    userData.append(key, userInfo[key]);
  }
  console.log(userInfo);
  const { data } = await instance.post(
    "/mini-project/api/auth/register",
    userData
  );
  if (data.token) {
    setToken(data.token);
  }
  return data;
};

const login = async (userInfo) => {
  const { data } = await instance.post(
    "/mini-project/api/auth/login",
    userInfo
  );
  if (data.token) {
    setToken(data.token);
  }
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/mini-project/api/auth/users");
  return data;
};

const me = async () => {
  const { data } = await instance.get("/mini-project/api/auth/me");
  return data;
};

const updateUser = async (image) => {
    const { data } = await instance.put("//mini-project/api/auth/profile", { image });
    return data;
};

export { register, login, getAllUsers, me , updateUser };
