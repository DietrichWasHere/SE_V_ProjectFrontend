<template>
<button @click="download()">CSV Report</button>
</template>
<script>
//import router from '@/router/router'
import AppointmentServices from '@/services/AppointmentServices.js';
export default {
  name: 'download_button',
  props: ['orgID', 'month', 'year'],
  data: () => ({
  }),
  methods: {
    async download() {
		var str = 'Date,Start Time,End Time,Location,Status,Tutor First Name,Tutor Last Name,Tutor Rating,Tutor Comments,' +
				'Student First Name,Student Last Name,Student Rating,Student Comments\n';
		var result = await AppointmentServices.getAppointments(this.orgID);
		for (var i in result.data) {
			var curr = result.data[i];
			if (new Date(curr.startDateTime).getMonth() != this.month - 1) continue;
			str += curr.startDateTime.substr(0,10) + ',';
			str += curr.startDateTime.substr(11,5) + ',';
			str += curr.endDateTime.substr(11,5) + ',';
			str += curr.locationName + ',';
			str += ['Available','Pending','Booked','Canceled'][['grey','orange','green','red'].indexOf(curr.color)] + ',';
			str += curr.tutorFName + ',';
			str += curr.tutorLName + ',';
			str += curr.tutorRating + ',';
			str += curr.tutorComments + ',';
			if (curr.studentFName) str += curr.studentFName;
			str += ',';
			if (curr.studentLName) str += curr.studentLName;
			str += ',';
			str += curr.studentRating + ',';
			str += curr.studentComments + '\n';
		}
		//console.log(str);
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(str));
		element.setAttribute('download', 'Tutor_Appointments_' + this.month + '_' + this.year + '.csv');

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);
	}
  }
}
</script>
<style scoped>
</style>