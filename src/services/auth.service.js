import axios from "../utils/axios";

export const loginUser = (data) => {
  return axios.post("/users/login", data);
};

export const registerUser = (data) => {
  return axios.post("/users/register", data);
};

export const logout = () => {
  return axios.post("/users/logout");
};
