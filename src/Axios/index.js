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

let isRetry = false;

axios.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && isRetry) {
      window.localStorage.removeItem("accessToken");
      window.location.href = "http://localhost:3000/login";
    }
    if (error.response.status === 401 && error.config && !isRetry) {
      try {
        isRetry = true;
        const response = await axiosDefault(
          `https://localhost:44364/api/User/refresh`,
          "put",
        );
        window.localStorage.setItem("accessToken", response.data.accessToken);
        originalRequest.headers.Authorization =
          "Bearer " + response.data.accessToken;
        return axios.request(originalRequest);
      } catch (error) {
        throw error;
      }
    } else {
      isRetry = false;
      throw error;
    }
  },
);
