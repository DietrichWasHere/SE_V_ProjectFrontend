import axios from "axios";
import settings from "./config"

const apiClient = axios.create(settings);

export default {
  getLocations() {
    return apiClient.get("/locations/");
  },
  getLocation(locationID) {
    return apiClient.get("/locations/" + locationID);
  },
  deleteLocation(locationID) {
    return apiClient.delete("/locations/" + locationID);
  },
  addLocation(location) {
    return apiClient.post("/locations/", location);
  },
  updateLocation(locationID, location) {
    return apiClient.put("/locations/" + locationID, location);
  }
};