import axios from "axios";
import settings from "./config"

const apiClient = axios.create(settings);

export default {
  getAppointments() {
    return apiClient.get("/appointments/");
  },
  getAppointment(tutorID, startDateTime) {
    return apiClient.get("/appointments/" + tutorID + "/" + startDateTime);
  },
  deleteAppointment(tutorID, startDateTime) {
    return apiClient.delete("/appointments/" + tutorID + "/" + startDateTime);
  },
  addAppointment(appointment) {
    return apiClient.post("/appointments/", appointment);
  },
  updateAppointment(tutorID, startDateTime, appointment) {
    return apiClient.put("/appointments/" + tutorID + "/" + startDateTime, appointment);
  }
};