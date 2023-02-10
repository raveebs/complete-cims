import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8000/",
  timeout: 1000 * 5,
  withCredentials: true,
});

export default client;
