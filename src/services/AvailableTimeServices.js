import axios from "axios";
import settings from "./config"

const apiClient = axios.create(settings);

export default {
  getAvailableTimes() {
    return apiClient.get("/availableTimes/");
  },
  getAvailableTime(tutorID, startDateTime) {
    return apiClient.get("/availableTimes/" + tutorID + "/" + startDateTime);
  },
  deleteAvailableTime(tutorID, startDateTime) {
    return apiClient.delete("/availableTimes/" + tutorID + "/" + startDateTime);
  },
  addAvailableTime(availableTime) {
    return apiClient.post("/availableTimes/", availableTime);
  },
  updateAvailableTime(tutorID, startDateTime, availableTime) {
    return apiClient.put("/availableTimes/" + tutorID + "/" + startDateTime, availableTime);
  }
};