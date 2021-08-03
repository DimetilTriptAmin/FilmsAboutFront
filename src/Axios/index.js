import axios from "axios";

export const axiosDefault = (url, method, data) => {
  return axios({
    url,
    method,
    data,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
  });
};
