import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL

  baseURL: "http://localhost:5001/project-5db03/us-central1/api",
  // baseURL: "...",
});

export default instance;
