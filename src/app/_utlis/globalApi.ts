import axios from "axios";

const SendEmail = (data: any) => {
  return axios.post("/api/send", data);
};

export default SendEmail;
