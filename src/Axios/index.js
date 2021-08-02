import axios from "axios";

export const axiosDefault = (url, method, errors, data) => {
  return axios({
    url,
    method,
    data,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
  }).catch((error) => {
    errors.hasErrors = true;
    errors.message = error.message;
    console.log('axiosDefault: ' + error.message)
  });
};
