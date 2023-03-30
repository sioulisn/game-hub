import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "93b0cea1a83d47a4ba3399ca7838916c",
  },
});
