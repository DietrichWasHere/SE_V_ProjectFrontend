import axios from "axios";
import settings from "./config"

const apiClient = axios.create(settings);

export default {
  getSubjects() {
    return apiClient.get("/subjects/");
  },
  getSubject(subjectID) {
    return apiClient.get("/subjects/" + subjectID);
  },
  deleteSubject(subjectID) {
    return apiClient.delete("/subjects/" + subjectID);
  },
  addSubject(subject) {
    return apiClient.post("/subjects/", subject);
  },
  updateSubject(subjectID, subject) {
    return apiClient.put("/subjects/" + subjectID, subject);
  }
};