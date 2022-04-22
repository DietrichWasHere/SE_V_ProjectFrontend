<template>
  <v-app id="inspire">


    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        color="deep-purple darken-3"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64">     
          <img 
         :src="`${picture}`"
          alt="">
        </v-avatar>

        <div><p style="color:white; font-size:30px;">
             Notifications</p></div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card"
            cols="12"
          >
            <v-card>
              <v-subheader>{{ card }}</v-subheader>

    
              <v-list two-line>
                <!--<template v-for="request in requests">-->
                  <v-list-item
                    v-for="request in requests"
                    :key="request.requestID"
                   
                  >
                    <v-list-item-avatar        
                    class="mb-4"
                    color="grey darken-1"
                    size="64">     
                      <img 
                    :src="`${request.picture}`"
                      alt="">
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>Accept Tutor Request with {{ request.name }}?</v-list-item-title>

                      <v-list-item-subtitle>
                        {{ request.comments }}
                      </v-list-item-subtitle>
                          <div>
                        <v-btn
                         text
                          color="blue lighten-2"
                            @click="accept(request)"

                        >
                        Accept&nbsp; 
                        <br>
                        <v-icon color="blue lighten-1">mdi-thumb-up</v-icon>
                        </v-btn>
                        <v-btn
                        text
                          color="grey"
                          @click="deny(request)"
                        >                  
                        Deny&nbsp;
                        <br>
                        <v-icon color="grey lighten-1">mdi-thumb-down</v-icon>
                        </v-btn>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
               <!--</template>-->
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import ApptRequestServices from '@/services/ApptRequestServices.js';
import UserServices from '@/services/UserServices.js';
import AppointmentServices from '@/services/AppointmentServices.js';
export default {
    name: 'mssgInbox',
     props: {
    msg: String
  },

    data: () => ({
      cards: ['Today'/*, 'Yesterday'*/],
      drawer: null,
      links: [
        ['mdi-inbox-arrow-down'],
      ],
      picture: "",
      requests:[],
      rawRequests:[],

      studentName:[],
      org : "",
    }),
  
    created () {
              var that = this;

          UserServices.getCurrentUser().then(function(result) {
           console.log("here", result.data.user.roles[0].org)
           that.org = result.data.user.roles[0].org;
          
          UserServices.getUser(result.data.user.id)
          .then(response => {
            that.picture = response.data[0].picture;
            console.log(that.picture);
          })
          .catch(error => {
            console.log('There was an error: getting user', error.response)
          })

        })
        this.reload();
      },
        methods: {
          reload(){
            this.requests = []
          var that = this;

      ApptRequestServices.getRequests()
        .then(response => {
            
            that.rawRequests= response.data
            for (let x = 0; x < that.rawRequests.length; x++)
            {
              //  UserServices.getUser(this.rawRequests[x].studentID)
             //   .then(response => {
               AppointmentServices.getAppointment(that.org, that.rawRequests[x].appointmentID)
               .then(response => {
                  console.log("now", response.data[x].endDateTime)
               })
                that.requests.push({
                studentID : that.rawRequests[x].studentID,
                appointmentID : that.rawRequests[x].appointmentID,
                subjectID : that.rawRequests[x].subjectID,
                reqDate: that.rawRequests[x].reqDate, 
                reqStatus : that.rawRequests[x].reqStatus,
                name :  that.rawRequests[x].fName + " " + that.rawRequests[x].lName,
                picture : that.rawRequests[x].picture,
                comments : that.rawRequests[x].comments
              })
                //  })
          /*         .catch(error => {
            
            console.log('There was an error: in getting user', error.response)
            })*/
            }
          })
          .catch(error => {
            
            console.log('There was an error: in getting request', error)
          })
          },
      
         accept(r) {
           var that = this;
            AppointmentServices.updateAppointment(r.appointmentID, {color:'green'})
            .then(response => {         
              ApptRequestServices.deleteRequest(r.studentID, r.appointmentID)
                    .then(response => {  
                      console.log('Worked', response)
                      that.reload();
                    })    
                      .catch(error => {
          
                    console.log('There was an error: updating', error.response)
                  });
     

              console.log(response);
            })
            .catch(error => {
              
              console.log('There was an error: updating', error.response)
            });


         
       },
       deny(r)
      {
            var that = this;
            AppointmentServices.updateAppointment(r.appointmentID, {color:'red'})
            .then(response => {   
                ApptRequestServices.deleteRequest(r.studentID, r.appointmentID)
                    .then(response => {  
                      console.log('Worked', response)
                    that.reload();
                    })    
                      .catch(error => {
          
                    console.log('There was an error: updating', error.response)
                  });
     
         
              console.log(response);

            })
            .catch(error => {
              
              console.log('There was an error: updating', error.response)
            });
         
       },

  
      }
    }
    



// wireframe credit : https://github.com/vuetifyjs/vuetify/blob/master/packages/docs/src/examples/wireframes/inbox.vue
</script>