<template>
<v-container class = "setsize"> 
  
    <br>
    <h2 v-if= "role === 'student'"
    >How was your experience with your tutor?</h2>

    <h2 v-if= "role === 'tutor'"
    >How was your experience with your tutor?</h2>
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
                label="Let us know if you have any more comments"
                outlined
                persistent-hint
     ></v-text-field>

    <v-btn color="primary" elevation="3" plain rounded x-large to="/calendarstudent">
        Next
    </v-btn>
</v-container>
</template>

<script>
import UserServices from '@/services/UserServices.js';

  export default {
    data: () => ({
      rating: 3,
      comment : "",
      role : ""
    }),
  
   created () 
   { 
       UserServices.getCurrentUser().then(function(result) {
           console.log(result.data.user.roles[0].role);
           this.role = result.data.user.roles[0].role;
       })

   }
  }
</script>