import axios from "axios";

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
    throw error.response?.data ?? "Server is offline.";
  });
};

axios.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    console.log(originalRequest);
    if (
      error.response.status === 401 &&
      error.config //&&
      //!error.config._isRetry          КАК ПРЕДОТВРАТИТЬ ПОВТОРНЫЕ ЗАПРОСЫ
    ) {
      //originalRequest.config._isRetry = true;
      try {
        const response = await axiosDefault(
          `https://localhost:44364/api/User/refresh`,
          "put",
        );
        window.localStorage.setItem("accessToken", response.data.accessToken);
        const headers = {
          "Content-Type": "application/json",
          Authorization: "Bearer " + response.data.accessToken,
        };
        console.log(headers, "HEADERS");
        originalRequest.headers = headers;
        console.log(originalRequest.headers, "ORIGIN HEADERS");
        return axios.request(originalRequest);
      } catch (error) {
        console.log(error);
      }
    }
    throw error; // добавить функционал, чтобы оповестило\перенаправило на страницу логина
  },
);
