import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:44364/api/",
  responseType: "json",
});
