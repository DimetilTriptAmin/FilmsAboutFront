import axios from "axios";
import { UnauthorizedError } from "../helper";

export const axiosDefault = (url, method, data, token) => {
  return axios({
    url,
    method,
    data,
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  }).catch((error) => {
    if (error.response.status === 401)
      throw UnauthorizedError("Token expired.");
    throw error.response?.data ?? "Server is offline.";
  });
};
