import axios from "axios";
import settings from "./config"

const apiClient = axios.create(settings);

export default {
  notify(number, msgTxt) {
    return apiClient.get("/notify/", {to: number, msg: msgTxt});
  },
};