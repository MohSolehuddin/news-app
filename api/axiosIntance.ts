import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.interceptors.request.use(
  (config: any) => {
    console.log("url when request", config.baseURL + config.url);
    config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 404) {
      return error.response;
    }
    return Promise.reject(error.response.data);
  }
);
export default axiosInstance;
