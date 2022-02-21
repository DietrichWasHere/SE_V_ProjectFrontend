import axios from "axios";
import settings from "./config"

const apiClient = axios.create(settings);

export default {
  getRequests() {
    return apiClient.get("/requests/");
  },
  getRequest(studentID, orgID, subjectID, reqDate) {
    return apiClient.get("/requests/" + studentID + "/" + orgID + "/" + subjectID + "/" + reqDate);
  },
  deleteRequest(studentID, orgID, subjectID, reqDate) {
    return apiClient.delete("/requests/" + studentID + "/" + orgID + "/" + subjectID + "/" + reqDate);
  },
  addRequest(request) {
    return apiClient.post("/requests/", request);
  },
  updateRequest(studentID, orgID, subjectID, reqDate, request) {
    return apiClient.put("/requests/" + studentID + "/" + orgID + "/" + subjectID + "/" + reqDate, request);
  }
};