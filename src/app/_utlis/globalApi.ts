import axios from "axios";

const SendEmail = (data: {}) => {
  return axios.post("/api/send", data);
};

export default SendEmail;
