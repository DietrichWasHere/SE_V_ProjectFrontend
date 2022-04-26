import axios from "axios";
import settings from "./config"

const apiClient = axios.create(settings);

export default {
  getSubjects() {
    return apiClient.get("/tutorSubjects/");
  },
  getSubject(tutorID, subjectID) {
    return apiClient.get("/tutorSubjects/" + tutorID + "/" + subjectID);
  },
  deleteSubjects() {
    return apiClient.delete("/subjects/");
  },
  deleteSubject(subjectID) {
    return apiClient.delete("/subjects/" + subjectID);
  },
  addSubject(tutorSubject) {
    return apiClient.post("/subjects/", tutorSubject);
  },
  updateSubject(tutorID, subjectID, tutorSubject) {
    return apiClient.put("/tutorSubjects/" + tutorID + "/" + subjectID, tutorSubject);
  }
};