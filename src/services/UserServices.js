import axios from "axios";
import settings from "./config"

const apiClient = axios.create(settings);

export default {
  getCurrentUser() {
    // get id and roles
    return apiClient.get("/user/");
  },
  getUsers() {
    return apiClient.get("/users/");
  },
  getUser(userID) {
    // get user data
    return apiClient.get("/users/" + userID);
  },
  deleteUser(userID) {
    return apiClient.delete("/users/" + userID);
  },
  addUser(user) {
    return apiClient.post("/user/", user);
  },
  updateUserById(userID, user) {
    return apiClient.put("/users/" + userID, user);
  },
  updateUser(user) {
    return apiClient.put("/user/", user);
  }
};