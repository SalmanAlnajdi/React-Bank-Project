import instance from "axios";
import { setToken } from "../api/storage";

const register = async (userInfo) => {
    const userData = new FormData();
    for (const key in userInfo) {
        userData.append(key, userInfo[key]);
    }

    const { data } = await instance.post("/mini-project/api/auth/register", userData);
    if(data.token) {
        setToken(data.token);
    }
    return data;
}


const login = async (userInfo) => {
    const { data } = await instance.post("/mini-project/api/auth/login", userInfo);
    if(data.token) {
        setToken(data.token);
    }
    return data;
}

export { register, login }