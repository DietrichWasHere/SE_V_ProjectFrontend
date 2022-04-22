import axios from "axios";
import settings from "./config"

const apiClient = axios.create(settings);

export default {
  getTutors(orgID) {
    return apiClient.get("/tutors/" + orgID);
  },
  getTutorsByOrg(orgID) {
    return apiClient.get("/tutors/" + orgID);
  },
  getTutor(userID, orgID) {
    return apiClient.get("/tutors/" + userID + "/" + orgID);
  },
  deleteTutor(orgID, userID) {
    return apiClient.delete("/tutors/" + orgID + "/" + userID);
  },
  addTutor(tutor) {
    return apiClient.post("/tutors/", tutor);
  },
  updateTutor(userID, orgID, tutor) {
    return apiClient.put("/tutors/" + userID + "/" + orgID, tutor);
  }
};