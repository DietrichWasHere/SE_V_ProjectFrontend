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
  deleteSubject(tutorID, subjectID) {
    return apiClient.delete("/tutorSubjects/" + tutorID + "/" + subjectID);
  },
  addSubject(tutorSubject) {
    return apiClient.post("/tutorSubjects/", tutorSubject);
  },
  updateSubject(tutorID, subjectID, tutorSubject) {
    return apiClient.put("/tutorSubjects/" + tutorID + "/" + subjectID, tutorSubject);
  }
};