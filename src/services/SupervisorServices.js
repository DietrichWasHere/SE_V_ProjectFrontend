import axios from "axios";
import settings from "./config"

const apiClient = axios.create(settings);

export default {
  getTutors() {
    return apiClient.get("/tutors/");
  },
  getTutor(userID, orgID) {
    return apiClient.get("/tutors/" + userID + "/" + orgID);
  },
  deleteTutor(userID, orgID) {
    return apiClient.delete("/tutors/" + userID + "/" + orgID);
  },
  addTutor(tutor) {
    return apiClient.post("/tutors/", tutor);
  },
  updateTutor(userID, orgID, tutor) {
    return apiClient.put("/tutors/" + userID + "/" + orgID, tutor);
  }
};