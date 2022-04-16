<template>
<v-container class = "setsize"> 
  
    <br>
    <h2>How was your experience with this session?</h2>
    <div  class="text-center">
   <p>Terrible&nbsp;&nbsp;&nbsp;&nbsp;Bad&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;Okay&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Good&nbsp;&nbsp;&nbsp;Excellent</p>
   <v-rating
        v-model="rating"
        color="blue"
        
        background-color="grey lighten-1"
        half-increments
        hover
        length="5"
        size="40"
        
    ></v-rating>
         </div >

    <br>
   
    <br>
   
      <v-text-field v-model="comment" text color="blue"
                label="Let us know if you have any other comments"
                outlined
                persistent-hint
     ></v-text-field>

    <v-btn color="primary" elevation="3" plain rounded x-large  @click="submit()">
        Submit
    </v-btn>
</v-container>
</template>

<script>
import UserServices from '@/services/UserServices.js';
import AppointmentServices from '@/services/AppointmentServices.js';

  export default {
    props: ['id'],
    data: () => ({
      rating: 3,
      comment : "",
      user : "",
      tutorComment: "", 
      tutorRating: 0,
      studentComment: "", 
      studentRating: 0,
      tutorID : "",
      studentID: "",
    }),
  
   created () 
   { 
       var that = this
       UserServices.getCurrentUser().then(function(result) {
           console.log(result.data.user.id);
           that.user =  result.data.user.id;
       
       AppointmentServices.getAppointment(result.data.user.roles[0].org, that.id).then(function(result) {
            that.tutorID = result.data[0].tutorID;
            that.studentID = result.data[0].studentID;
            that.studentComment = result.data[0].studentComments;
            that.tutorComment = result.data[0].studentComments;
            that.tutorRating = result.data[0].tutorRating;
            that.studentRating = result.data[0].studentRating;
       })
       })
   },methods: {
   submit(){

    console.log(this.user, this.tutorID, this.studentID);

       if( this.user == this.tutorID)
       {
           this.tutorComment = this.comment;
            this.tutorRating = this.rating;
            AppointmentServices.updateAppointment(this.id, {tutorRating: this.tutorRating,tutorComments: this.tutorComment})
            .then(response => {         
              console.log(response);
            })
            .catch(error => {
              
              console.log('There was an error: updating', error.response)
            });
       }
       else if (this.user == this.studentID)
       {
           
           this.studentComment = this.comment;
           this.studentRating = this.rating;
            AppointmentServices.updateAppointment(this.id, {studentRating: this.studentRating, studentComments: this.studentComment})
            .then(response => {         
              console.log(response);
            })
            .catch(error => {
              
              console.log('There was an error: updating', error.response)
            });
       }


   }}
  }
</script>