import axios from "axios";
import { BASE_URL } from "../shared/Constants";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

instance.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  async (response) => {
    if (response.data.status === -1) {
    }

    return response;
  },
  (error) => Promise.reject(error)
);

export default instance;
