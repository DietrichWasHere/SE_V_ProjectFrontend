import axios from "axios";
import settings from "./config"

const apiClient = axios.create(settings);

export default {
  getOrganizations() {
    return apiClient.get("/orgs/");
  },
  getOrganization(orgID) {
    return apiClient.get("/orgs/" + orgID);
  },
  deleteOrganization(orgID) {
    return apiClient.delete("/orgs/" + orgID);
  },
  addOrganization(org) {
    return apiClient.post("/orgs/", org);
  },
  updateOrganizations(orgID, org) {
    return apiClient.put("/orgs/" + orgID, org);
  }
};