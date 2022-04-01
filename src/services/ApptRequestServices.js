import axios from "axios";
import settings from "./config"

const apiClient = axios.create(settings);

export default {
  getRequests() {
    return apiClient.get("/appointments/requests/");
  },
  getRequest(studentID, orgID, subjectID, reqDate) {
    return apiClient.get("/appointments/requests/" + studentID + "/" + orgID + "/" + subjectID + "/" + reqDate);
  },
  deleteRequest(studentID, orgID, subjectID, reqDate) {
    return apiClient.delete("/appointments/requests/" + studentID + "/" + orgID + "/" + subjectID + "/" + reqDate);
  },
  addRequest(request) {
    return apiClient.post("/appointments/requests/", request);
  },
  updateRequest(studentID, orgID, subjectID, reqDate, request) {
    return apiClient.put("/appointments/requests/" + studentID + "/" + orgID + "/" + subjectID + "/" + reqDate, request);
  }
};