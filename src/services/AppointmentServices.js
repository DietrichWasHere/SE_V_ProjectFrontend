import axios from "axios";
import settings from "./config"

const apiClient = axios.create(settings);

export default {
  getAppointments(orgID) {
    return apiClient.get("/appointments/" + orgID);
  },
  getAppointment(orgID, appointmentID) {
    return apiClient.get("/appointments/" + orgID + '/' + appointmentID);
  },
  deleteAppointment(tutorID, startDateTime) {
    return apiClient.delete("/appointments/" + tutorID + "/" + startDateTime);
  },
  addAppointment(appointment) {
    return apiClient.post("/appointments/", appointment);
  },
  updateAppointment(appointmentID, appointment) {
    return apiClient.put("/appointments/" + appointmentID, appointment);
  }
};