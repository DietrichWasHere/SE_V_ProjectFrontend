import axios from "axios";
import settings from "./config"

const apiClient = axios.create(settings);

export default {
  getStudents() {
    return apiClient.get("/students/");
  },
  getStudent(userID, orgID) {
    return apiClient.get("/students/" + userID + "/" + orgID);
  },
  deleteStudent(userID, orgID) {
    return apiClient.delete("/students/" + + userID + "/" + orgID);
  },
  addStudent(student) {
    return apiClient.post("/students/", student);
  },
  updateStudent(userID, orgID, student) {
    return apiClient.put("/students/" + userID + "/" + orgID, student);
  }
};