<template>
    <v-app>  
      <p>{{this.appointments}}</p>
      <v-btn color="primary" :loading="loading" @click.native="newApptTest">New Appt Test</v-btn>
   </v-app>
</template>

<script>
import ApptServices from '@/services/AppointmentServices.js';

export default {
  name: 'Test',
  props: {
    msg: String
  },
  data() {
    return {
      appointments: [],
      apptEdit: null
    };
  },
  created() {
    console.log("test");
    ApptServices.getAppointments()
    .then(response => {
      this.appoinments = response.data
    })
    .catch(error => {
      console.log('There was an error:', error.response)
    })
  },
  methods: {
    newApptTest() {
      console.log("test");
      ApptServices.addAppointment({
        tutorID: '1',
        orgID: '1',
        startDateTime: '2022-01-04 13:40',
        endDateTime: '2022-01-04 13:45',
        locationID: '1',
        studentID: '1',
        tutorRating: null,
        tutorComments: null,
        studentRating: null,
        studentComments: null
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>