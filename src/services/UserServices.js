import axios from "axios";
import settings from "./config"

const apiClient = axios.create(settings);

export default {
  getUsers() {
    return apiClient.get("/users/");
  },
  getUser(userID) {
    return apiClient.get("/users/" + userID);
  },
  deleteUser(userID) {
    return apiClient.delete("/users/" + userID);
  },
  addUser(user) {
    console.log(user);
    return apiClient.post("/users/", user);
  },
  updateUser(userID, user) {
    return apiClient.put("/users/" + userID, user);
  }
};