import { BASE_URL } from "@/config/constant";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "Bearer Wookie2021",
  },
});

export default axiosInstance;
